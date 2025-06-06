export const passwordResetTemplate = (resetUrl) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Reset Your Password</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .container {
            background-color: #f9f9f9;
            border-radius: 5px;
            padding: 20px;
            margin-top: 20px;
          }
          .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #22C55E;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
          }
          .button:hover {
            background-color: #16A34A;
          }
          .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Reset Your Password</h2>
          <p>We received a request to reset your password. Click the button below to create a new password:</p>
          
          <a href="${resetUrl}" class="button">Reset Password</a>
          
          <p>If you didn't request this password reset, you can safely ignore this email.</p>
          
          <p>This link will expire in 15 minutes for security reasons.</p>
          
          <div class="footer">
            <p>If you're having trouble clicking the button, copy and paste this URL into your web browser:</p>
            <p>${resetUrl}</p>
          </div>
        </div>
      </body>
    </html>
  `;
}; 