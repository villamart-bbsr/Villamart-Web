export const emailVerificationTemplate = (otp) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Email Verification</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            text-align: center;
            padding: 20px 0;
            background-color: #16A34A;
            color: white;
            border-radius: 5px 5px 0 0;
          }
          .content {
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 0 0 5px 5px;
          }
          .otp-container {
            text-align: center;
            margin: 20px 0;
            padding: 20px;
            background-color: #e8f5e9;
            border-radius: 5px;
          }
          .otp-code {
            font-size: 32px;
            font-weight: bold;
            color: #16A34A;
            letter-spacing: 5px;
          }
          .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Verify Your Email</h1>
          </div>
          <div class="content">
            <p>Thank you for registering with VillaMart! To complete your registration, please use the following verification code:</p>
            
            <div class="otp-container">
              <div class="otp-code">${otp}</div>
            </div>

            <p>This code will expire in 5 minutes. If you did not request this verification code, please ignore this email.</p>
            
            <p>For security reasons:</p>
            <ul>
              <li>Do not share this code with anyone</li>
              <li>Our team will never ask for this code</li>
              <li>This code is valid for one-time use only</li>
            </ul>

            <p>If you have any questions or need assistance, please contact our support team.</p>
            
            <p>Best regards,<br>The VillaMart Team</p>
          </div>
          <div class="footer">
            <p>This is an automated message, please do not reply to this email.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}; 