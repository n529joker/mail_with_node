const mailOptions = {
    from: 'rawlingsname@gmail.com',
    to: `${req.body.email}`,
    html: `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Email Verification</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #F7F7F7;
          }
    
          .container {
            max-width: 500px;
            margin: 0 auto;
            background-color: #FFFFFF;
            padding: 30px;
            border-radius: 5px;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
          }
    
          h1 {
            text-align: center;
            margin-top: 0;
            margin-bottom: 20px;
          }
    
          p {
            margin-bottom: 20px;
          }
    
          .button {
            display: inline-block;
            padding: 10px 20px;
            border-radius: 5px;
            border: none;
            background-color: #4CAF50;
            color: #FFFFFF;
            font-size: 16px;
            font-weight: bold;
            text-decoration: none;
            cursor: pointer;
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
          }
    
          .button:hover {
            background-color: #3E8E41;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Email Verification</h1>
          <p>Thank you for signing up! Please click the button below to verify your email address and complete the registration process:</p>
          <p>
            <a href="#" class="button">Verify Email</a>
          </p>
          <p>If you did not sign up for this service, please ignore this email.</p>
        </div>
      </body>
    </html>`
  };

  console.log(mailOptions['from']);

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.redirect("/?success=true");
    }
  });