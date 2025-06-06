import { uploadPicture } from "../middleware/uploadPictureMiddleware.js";
import Comment from "../models/Comment.js";
import Post from "../models/Post.js";
import User from "../models/User.js";
import { fileRemover } from "../utils/fileRemover.js";
import OTP from "../models/OTP.js";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { mailSender } from "../utils/mailSender.js";
import { passwordUpdateTemplate } from "../templates/passwordUpdateTemplate.js";
import crypto from 'crypto';
import { passwordResetTemplate } from "../templates/passwordResetTemplate.js";

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User has already registered");
    }

    // Check if there's a pending registration
    const pendingOTP = await OTP.findOne({ email });
    if (pendingOTP) {
      // Delete existing OTP if it exists
      await OTP.deleteOne({ email });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Create OTP document with registration data
    await OTP.create({
      email,
      otp,
      type: 'verification',
      registrationData: {
        name,
        email,
        password
      }
    });

    return res.status(201).json({
      message: "OTP sent successfully. Please verify your email.",
      email: email
    });
  } catch (error) {
    next(error);
  }
};

const verifyOTP = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    // Find the OTP document
    const otpRecord = await OTP.findOne({ email, otp });

    if (!otpRecord) {
      throw new Error("Invalid OTP");
    }

    // Check if OTP is expired (5 minutes)
    const otpAge = Date.now() - otpRecord.createdAt;
    if (otpAge > 5 * 60 * 1000) {
      await OTP.deleteOne({ email, otp });
      throw new Error("OTP has expired. Please request a new one.");
    }

    // Get registration data
    const { registrationData } = otpRecord;
    if (!registrationData) {
      throw new Error("Registration data not found. Please try registering again.");
    }

    // Create the user
    const user = await User.create({
      name: registrationData.name,
      email: registrationData.email,
      password: registrationData.password,
      verified: true
    });

    // Delete the OTP record
    await OTP.deleteOne({ email, otp });

    return res.status(200).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      verified: user.verified,
      admin: user.admin,
      isEmployee: user.isEmployee,
      token: await user.generateJWT(),
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      throw new Error("Email not found");
    }

    if (!user.verified) {
      throw new Error("Please verify your email before logging in");
    }

    if (await user.comparePassword(password)) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
        isEmployee: user.isEmployee,
        token: await user.generateJWT(),
      });
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    next(error);
  }
};

const userProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);

    if (user) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
        isEmployee: user.isEmployee,
      });
    } else {
      let error = new Error("User not found");
      error.statusCode = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    const userIdToUpdate = req.params.userId;

    let userId = req.user._id;

    if (!req.user.admin && userId !== userIdToUpdate) {
      let error = new Error("Forbidden resource");
      error.statusCode = 403;
      throw error;
    }

    let user = await User.findById(userIdToUpdate);

    if (!user) {
      throw new Error("User not found");
    }

    if (typeof req.body.admin !== "undefined" && req.user.admin) {
      user.admin = req.body.admin;
    }

    if (typeof req.body.isEmployee !== "undefined" && req.user.admin) {
      user.isEmployee = req.body.isEmployee;
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password && req.body.password.length < 6) {
      throw new Error("Password length must be at least 6 character");
    } else if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUserProfile = await user.save();

    res.json({
      _id: updatedUserProfile._id,
      avatar: updatedUserProfile.avatar,
      name: updatedUserProfile.name,
      email: updatedUserProfile.email,
      verified: updatedUserProfile.verified,
      admin: updatedUserProfile.admin,
      isEmployee: updatedUserProfile.isEmployee,
      token: await updatedUserProfile.generateJWT(),
    });
  } catch (error) {
    next(error);
  }
};

const updateProfilePicture = async (req, res, next) => {
  try {
    const upload = uploadPicture.single("profilePicture");

    upload(req, res, async function (err) {
      if (err) {
        const error = new Error(
          "An unknown error occured when uploading " + err.message
        );
        next(error);
      } else {
        // every thing went well
        if (req.file) {
          let filename;
          let updatedUser = await User.findById(req.user._id);
          filename = updatedUser.avatar;
          if (filename) {
            fileRemover(filename);
          }
          updatedUser.avatar = req.file.filename;
          await updatedUser.save();
          res.json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
            isEmployee: updatedUser.isEmployee,
            token: await updatedUser.generateJWT(),
          });
        } else {
          let filename;
          let updatedUser = await User.findById(req.user._id);
          filename = updatedUser.avatar;
          updatedUser.avatar = "";
          await updatedUser.save();
          fileRemover(filename);
          res.json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
            isEmployee: updatedUser.isEmployee,
            token: await updatedUser.generateJWT(),
          });
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const filter = req.query.searchKeyword;
    let where = {};
    if (filter) {
      where.email = { $regex: filter, $options: "i" };
    }
    let query = User.find(where);
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;
    const total = await User.find(where).countDocuments();
    const pages = Math.ceil(total / pageSize);

    res.header({
      "x-filter": filter,
      "x-totalcount": JSON.stringify(total),
      "x-currentpage": JSON.stringify(page),
      "x-pagesize": JSON.stringify(pageSize),
      "x-totalpagecount": JSON.stringify(pages),
    });

    if (page > pages) {
      return res.json([]);
    }

    const result = await query
      .skip(skip)
      .limit(pageSize)
      .sort({ updatedAt: "desc" });

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    let user = await User.findById(req.params.userId);

    if (!user) {
      throw new Error("User no found");
    }

    const postsToDelete = await Post.find({ user: user._id });
    const postIdsToDelete = postsToDelete.map((post) => post._id);

    await Comment.deleteMany({
      post: { $in: postIdsToDelete },
    });

    await Post.deleteMany({
      _id: { $in: postIdsToDelete },
    });

    postsToDelete.forEach((post) => {
      fileRemover(post.photo);
    });

    await user.remove();
    fileRemover(user.avatar);

    res.status(204).json({ message: "User is deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// Request password reset
const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // Save hashed token to user
    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000; // 15 minutes
    await user.save();

    // Create reset URL with fallback
    const baseUrl = process.env.CLIENT_URL || 'http://localhost:5173';
    const resetUrl = `${baseUrl}/reset-password/${resetToken}`;

    // Send email
    try {
      await mailSender(
        email,
        "Password Reset Request",
        passwordResetTemplate(resetUrl)
      );

      res.status(200).json({
        success: true,
        message: "Password reset link sent to your email",
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
      await user.save();

      return res.status(500).json({
        success: false,
        message: "Error sending email",
      });
    }
  } catch (error) {
    console.error("Error in requestPasswordReset:", error);
    res.status(500).json({
      success: false,
      message: "Error requesting password reset",
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    // Hash the token
    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    // Find user with valid token
    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired reset token",
      });
    }

    // Update password (the pre-save hook will hash it)
    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    // Send confirmation email
    try {
      await mailSender(
        user.email,
        "Password Reset Successful",
        passwordUpdateTemplate()
      );
    } catch (error) {
      console.error("Error sending confirmation email:", error);
    }

    res.status(200).json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    console.error("Error in resetPassword:", error);
    res.status(500).json({
      success: false,
      message: "Error resetting password",
    });
  }
};

export {
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  updateProfilePicture,
  getAllUsers,
  deleteUser,
  verifyOTP,
  requestPasswordReset,
  resetPassword,
};
