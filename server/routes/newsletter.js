import express from 'express';
import { mailSender } from '../utils/mailSender.js';

const router = express.Router();

// Add debug logging for route registration
console.log('Newsletter routes registered');

router.post('/subscribe', async (req, res) => {
  console.log('Newsletter subscribe endpoint hit');
  console.log('Request body:', req.body);
  console.log('Request headers:', req.headers);
  
  try {
    console.log('Received newsletter subscription request:', req.body);
    const { email } = req.body;

    if (!email) {
      console.log('Email is missing in request');
      return res.status(400).json({
        success: false,
        message: "Email is required"
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format"
      });
    }

    // Check if email configuration is set
    if (!process.env.MAIL_USER || !process.env.MAIL_PASS || !process.env.MAIL_HOST) {
      console.error('Missing email configuration:', {
        MAIL_USER: process.env.MAIL_USER ? 'set' : 'missing',
        MAIL_PASS: process.env.MAIL_PASS ? 'set' : 'missing',
        MAIL_HOST: process.env.MAIL_HOST ? 'set' : 'missing'
      });
      return res.status(500).json({
        success: false,
        message: "Server configuration error"
      });
    }

    // Send notification email to admin
    const adminEmailContent = `
      <h2>New Newsletter Subscription</h2>
      <p>A new user has subscribed to the newsletter:</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
    `;

    console.log('Sending admin notification email to:', process.env.MAIL_USER);
    await mailSender(
      process.env.MAIL_USER,
      "New Newsletter Subscription - VillaMart",
      adminEmailContent
    );

    // Send confirmation email to subscriber
    const subscriberEmailContent = `
      <h2>Welcome to VillaMart Newsletter!</h2>
      <p>Thank you for subscribing to our newsletter. You'll now receive updates about:</p>
      <ul>
        <li>Latest products and offers</li>
        <li>Seasonal produce updates</li>
        <li>Farmers' stories and news</li>
        <li>Exclusive deals and promotions</li>
      </ul>
      <p>Stay tuned for our next update!</p>
      <p>Best regards,<br>The VillaMart Team</p>
    `;

    console.log('Sending welcome email to subscriber:', email);
    await mailSender(
      email,
      "Welcome to VillaMart Newsletter",
      subscriberEmailContent
    );

    console.log('Newsletter subscription successful for:', email);
    return res.status(200).json({
      success: true,
      message: "Successfully subscribed to newsletter"
    });
  } catch (error) {
    console.error("Newsletter subscription error:", {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to subscribe to newsletter"
    });
  }
});

export default router; 