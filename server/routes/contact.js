import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { contactPageEmail } from '../mail/templates/contactFormRes.js';
import axios from 'axios';

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
    const { name, email, phone, message, outletType, recaptchaToken } = req.body;

    // 1. Verify reCAPTCHA
    if (!recaptchaToken) {
      return res.status(400).json({ message: 'reCAPTCHA token missing' });
    }
    const secretKey = process.env.RECAPTCHA_SECRET_KEY; // <-- Add this to your .env
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
    try {
      const { data } = await axios.post(verifyUrl);
      if (!data.success) {
        return res.status(400).json({ message: 'reCAPTCHA verification failed' });
      }
    } catch (err) {
      return res.status(500).json({ message: 'reCAPTCHA verification error' });
    }

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

    // Send email to admin
    const info = await transporter.sendMail(mailOptions);
    console.log('Franchise inquiry email sent successfully:', info);

    // Confirmation email to user
    const userMailOptions = {
      from: {
        name: 'VillaMart Support',
        address: 'no-reply@villamart.in'
      },
      to: email,
      subject: '✅ Thank you for your franchise inquiry - VillaMart',
      html: `
        <div style="font-family: Arial, sans-serif; color: #222;">
          <h2>Thank you for your franchise inquiry!</h2>
          <p>Dear ${name},</p>
          <p>We have received your franchise inquiry for a <b>${outletType}</b> outlet. Our team will review your request and get in touch with you soon.</p>
          <p><b>Your details:</b></p>
          <ul>
            <li><b>Name:</b> ${name}</li>
            <li><b>Email:</b> ${email}</li>
            <li><b>Phone:</b> ${phone}</li>
            <li><b>Outlet Type:</b> ${outletType}</li>
            <li><b>Message:</b> ${message}</li>
          </ul>
          <p>Best regards,<br/>VillaMart Franchise Team</p>
          <p style="font-size: 13px; color: #888;">Please do not reply to this email. For queries, contact <a href="mailto:support@villamart.in">support@villamart.in</a>.</p>
        </div>
      `,
      text: `Thank you for your franchise inquiry, ${name}!

We have received your request for a ${outletType} outlet. Our team will review your inquiry and get in touch with you soon.

Your details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Outlet Type: ${outletType}
- Message: ${message}

Best regards,
VillaMart Franchise Team

Please do not reply to this email. For queries, contact support@villamart.in.`
    };
    try {
      await transporter.sendMail(userMailOptions);
      console.log('Confirmation email sent to franchise applicant:', email);
    } catch (userMailError) {
      console.error('Failed to send confirmation email to franchise applicant:', userMailError);
    }

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

router.post('/contact-us', async (req, res) => {
  try {
    const { name, email, address, mobile, subject, message, recaptchaToken } = req.body;

    // 1. Verify reCAPTCHA
    if (!recaptchaToken) {
      return res.status(400).json({ message: 'reCAPTCHA token missing' });
    }
    const secretKey = process.env.RECAPTCHA_SECRET_KEY; // <-- Add this to your .env
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
    try {
      const { data } = await axios.post(verifyUrl);
      if (!data.success) {
        return res.status(400).json({ message: 'reCAPTCHA verification failed' });
      }
    } catch (err) {
      return res.status(500).json({ message: 'reCAPTCHA verification error' });
    }

    // Email to admin
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER, // Send to the same email
      subject: `New Contact Us Submission - ${subject}`,
      html: contactPageEmail(name, email, address, mobile, subject, message)
    };

    // Send email to admin
    const info = await transporter.sendMail(mailOptions);
    console.log('Contact Us email sent successfully:', info);

    // Email to user (confirmation)
    const userMailOptions = {
  from: {
    name: 'VillaMart Support',
    address: 'no-reply@villamart.in'
  },
  to: email,
  subject: '✅ Thank you for contacting VillaMart - We\'ll be in touch soon!',
  html: contactPageEmail(
    name,
    email,
    address,
    mobile,
    subject,
    `Thank you for contacting VillaMart! We have received your message and will get back to you soon.`
  ),
  // Add text version for better deliverability
  text: `Hello ${name},

Thank you for contacting VillaMart! We have received your message and will get back to you soon.

Your inquiry details:
- Subject: ${subject}
- Email: ${email}
${mobile ? `- Mobile: ${mobile}` : ''}
${address ? `- Address: ${address}` : ''}

Our customer service team will review your inquiry and respond within 24 hours.

Best regards,
VillaMart Customer Support Team

Contact us: support@villamart.in
Website: www.villamart.in`
};
    try {
      await transporter.sendMail(userMailOptions);
      console.log('Confirmation email sent to user:', email);
    } catch (userMailError) {
      console.error('Failed to send confirmation email to user:', userMailError);
    }

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Detailed error in contact-us route:', {
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