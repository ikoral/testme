require("dotenv").config();

("use strict");
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper

const sendEmail = async (email) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: email.host,
    port: 1025,
    secure: false, // true for 465, false for other ports
    // auth: {
    //   user: testAccount.user, // generated ethereal user
    //   pass: testAccount.pass, // generated ethereal password
    // },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: email.from, // sender address
    // to: "bar@example.com, baz@example.com", // list of receivers
    to: email.to, // list of receivers
    subject: email.subject, // Subject line
    // text: "Hello world?", // plain text body
    html: email.html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

// main("g@t").catch(console.error);

// var transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "8ab5cb17709ac6",
//       pass: "7fa445feddb73d"
//     }
//   });

module.exports = sendEmail;
