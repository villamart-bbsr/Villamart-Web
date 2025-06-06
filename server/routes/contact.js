import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('Transporter verification error:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message, outletType } = req.body;

    // Log the request data
    console.log('Received contact form data:', { name, email, phone, outletType });
    console.log('Environment variables:', {
      MAIL_USER: process.env.MAIL_USER ? 'Set' : 'Not set',
      MAIL_PASS: process.env.MAIL_PASS ? 'Set' : 'Not set'
    });

    // Email content
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER, // Send to the same email
      subject: `New Franchise Inquiry - ${outletType} Outlet`,
      html: `
        <h2>New Franchise Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Outlet Type:</strong> ${outletType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Detailed error in contact route:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    res.status(500).json({ 
      message: 'Failed to send message',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

export default router; 