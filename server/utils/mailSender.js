// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";

export const mailSender = async (email, title, body) => {
    try {
        // Check if required environment variables are set
        if (!process.env.MAIL_HOST || !process.env.MAIL_USER || !process.env.MAIL_PASS) {
            console.error("Missing email configuration:", {
                host: process.env.MAIL_HOST ? "set" : "missing",
                user: process.env.MAIL_USER ? "set" : "missing",
                pass: process.env.MAIL_PASS ? "set" : "missing"
            });
            throw new Error("Email configuration is missing. Please check your environment variables.");
        }

        console.log("Creating transporter with config:", {
            host: process.env.MAIL_HOST,
            user: process.env.MAIL_USER
        });

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        });

        // Verify transporter configuration
        console.log("Verifying transporter configuration...");
        await transporter.verify();
        console.log("Transporter verified successfully");

        console.log("Sending email to:", email);
        let info = await transporter.sendMail({
            from: `"VillaMart" <${process.env.MAIL_USER}>`,
            to: email,
            subject: title,
            html: body,
        });

        console.log("Email sent successfully:", info.messageId);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error(`Failed to send email: ${error.message}`);
    }
};