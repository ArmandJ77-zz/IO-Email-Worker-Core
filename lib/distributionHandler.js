import nodemailer from "nodemailer";

require("dotenv").config({ path: ".env" });

const EMAIL_ACC = process.env.EMAIL_ACC;
const EMAIL_ACC_PASS = process.env.EMAIL_ACC_PASS;

const distributionHandler = parsedEmailObjects => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_ACC,
      pass: EMAIL_ACC_PASS
    }
  });

  parsedEmailObjects.forEach(emailObject => {
    // console.log(emailObject.data);
    let mailOptions = {
      from: EMAIL_ACC,
      to: emailObject.sendToEmail,
      subject: "TESTING IO",
      html: emailObject.data
    };

    transporter
      .sendMail(mailOptions)
      .then(info => {
        console.log(info);
      })
      .catch(err => {
        console.log(err);
      });
  });
};

export default distributionHandler;
