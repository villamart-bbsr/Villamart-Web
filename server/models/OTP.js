// const mongoose = require("mongoose");
// const mailSender = require("../utils/mailSender");
// const emailTemplate = require("../mail/templates/emailVerificationTemplate");
import mongoose from "mongoose";
import { mailSender } from "../utils/mailSender.js";
import { emailVerificationTemplate } from "../templates/emailVerificationTemplate.js";
import { Schema, model } from "mongoose";

// Define the OTP schema
const OTPSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	otp: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		enum: ['verification', 'password-reset'],
		default: 'verification'
	},
	registrationData: {
		name: String,
		email: String,
		password: String
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 300, // 5 minutes
	},
});

// Function to send verification email
async function sendVerificationEmail(email, otp) {
	try {
		console.log(`Attempting to send verification email to ${email}`);
		console.log(`OTP for ${email}: ${otp}`);
		
		// Send the email using the mailSender utility
		const mailResponse = await mailSender(
			email,
			"Verify Your Email - VillaMart",
			emailVerificationTemplate(otp)
		);
		
		console.log("Verification email sent successfully:", mailResponse.messageId);
		return mailResponse;
	} catch (error) {
		console.error("Error sending verification email:", error);
		throw new Error(`Failed to send verification email: ${error.message}`);
	}
}

// Pre-save hook to send email after saving the document
OTPSchema.pre("save", async function (next) {
	// Only send an email when a new document is created
	if (this.isNew && this.type === 'verification') {
		try {
			console.log("Pre-save hook: Sending verification email for new OTP");
			await sendVerificationEmail(this.email, this.otp);
		} catch (error) {
			console.error("Failed to send verification email in pre-save hook:", error);
			// Pass the error to next() to prevent saving if email fails
			return next(error);
		}
	}
	next();
});

// Create the OTP model
const OTP = model("OTP", OTPSchema);

export default OTP;
