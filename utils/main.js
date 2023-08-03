const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

const sendMail = async (mailInfo, callback) =>{
    try {
        const info = await transporter.sendMail(mailInfo)
        callback(info);
      } catch (error) {
        console.log(error);
      } 
}

module.exports = sendMail