export const contactUsEmail = (
    email,
    firstname,
    lastname,
    message,
    phoneNo,
    countrycode
  ) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Contact Form Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href="https://studynotion-edtech-project.vercel.app"><img class="logo"
                    src="https://i.ibb.co/7Xyj3PC/logo.png" alt="StudyNotion Logo"></a>
            <div class="message">Contact Form Confirmation</div>
            <div class="body">
                <p>Dear ${firstname} ${lastname},</p>
                <p>Thank you for contacting us. We have received your message and will respond to you as soon as possible.
                </p>
                <p>Here are the details you provided:</p>
                <p>Name: ${firstname} ${lastname}</p>
                <p>Email: ${email}</p>
                <p>Phone Number: ${phoneNo}</p>
                <p>Message: ${message}</p>
                <p>We appreciate your interest and will get back to you shortly. </p>
            </div>
            <div class="support">If you have any further questions or need immediate assistance, please feel free to reach
                out to us at <a href="mailto:info@studynotion.com">info@studynotion.com</a>. We are here to help!</div>
        </div>
    </body>
    
    </html>`
  }

// New template for ContactUs page
export const contactPageEmail = (
    name,
    email,
    address,
    mobile,
    subject,
    message
  ) => {
    return `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Contact Us Submission</title>
      <style>
        body {
          background: linear-gradient(135deg, #f0f9f0 0%, #e8f5e8 100%);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 16px;
          color: #2d3748;
          margin: 0;
          padding: 20px;
          line-height: 1.6;
        }
        .container {
          max-width: 650px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(34, 139, 34, 0.15);
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }
        .header-section {
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          padding: 32px 32px 24px;
          text-align: center;
          position: relative;
        }
        .header-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }
        .logo {
          max-width: 200px;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }
        .header-title {
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          position: relative;
          z-index: 1;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .content-section {
          padding: 40px 32px;
        }
        .info-grid {
          display: grid;
          gap: 20px;
          margin-bottom: 32px;
        }
        .info-item {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 18px 20px;
          transition: all 0.2s ease;
          border-left: 4px solid #22c55e;
        }
        .info-item:hover {
          background: #f0f9f0;
          border-color: #22c55e;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.1);
        }
        .info-label {
          font-weight: 600;
          color: #065f46;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
          display: block;
        }
        .info-value {
          color: #374151;
          font-size: 16px;
          margin: 0;
          word-wrap: break-word;
        }
        .message-item {
          background: linear-gradient(135deg, #f0f9f0 0%, #e8f5e8 100%);
          border: 1px solid #22c55e;
          border-radius: 12px;
          padding: 24px;
          margin-top: 8px;
        }
        .message-item .info-value {
          font-size: 15px;
          line-height: 1.7;
          white-space: pre-wrap;
        }
        .divider {
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #22c55e 50%, transparent 100%);
          margin: 32px 0;
          border-radius: 1px;
        }
        .footer {
          background: #f8fafc;
          padding: 24px 32px;
          text-align: center;
          border-top: 1px solid #e2e8f0;
          font-size: 14px;
          color: #6b7280;
        }
        .footer a {
          color: #059669;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
        }
        .footer a:hover {
          color: #047857;
          text-decoration: underline;
        }
        .badge {
          display: inline-block;
          background: #dcfce7;
          color: #166534;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-top: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        @media (max-width: 640px) {
          body {
            padding: 10px;
          }
          .header-section {
            padding: 24px 20px 20px;
          }
          .content-section {
            padding: 24px 20px;
          }
          .footer {
            padding: 20px;
          }
          .header-title {
            font-size: 24px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header-section">
          <img class="logo" src="https://villamart.in/images/villamart-logo.png" alt="VillaMart Logo" />
          <h1 class="header-title">New Contact Submission</h1>
          <div class="badge">Customer Inquiry</div>
        </div>
        
        <div class="content-section">
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">👤 Full Name</span>
              <p class="info-value">${name}</p>
            </div>
            
            <div class="info-item">
              <span class="info-label">📧 Email Address</span>
              <p class="info-value">${email}</p>
            </div>
            
            <div class="info-item">
              <span class="info-label">📍 Address</span>
              <p class="info-value">${address}</p>
            </div>
            
            <div class="info-item">
              <span class="info-label">📱 Mobile Number</span>
              <p class="info-value">${mobile}</p>
            </div>
            
            <div class="info-item">
              <span class="info-label">📋 Subject</span>
              <p class="info-value">${subject}</p>
            </div>
          </div>
          
          <div class="divider"></div>
          
          <div class="info-item message-item">
            <span class="info-label">💬 Message</span>
            <p class="info-value">${message}</p>
          </div>
        </div>
        
        <div class="footer">
          <p>This message was submitted through the VillaMart Contact Us form.</p>
          <p>For support and inquiries, reach out to <a href="mailto:info@villamart.in">info@villamart.in</a></p>
        </div>
      </div>
    </body>
    </html>`;
  };