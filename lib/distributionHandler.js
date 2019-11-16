import nodemailer from "nodemailer";

const distributionHandler = async (smtpAccount, emailOptionsCollection) => {
  let smtpTransporter = nodemailer.createTransport({
    service: smtpAccount.service,
    auth: {
      user: smtpAccount.auth.user,
      pass: smtpAccount.auth.pass
    }
  });

  let dispatchMessages = [];

  emailOptionsCollection.forEach(emailOption => {
    let mailOptions = {
      from: emailOption.from,
      to: emailOption.to,
      subject: emailOption.subject,
      text: emailOption.text,
      html: emailOption.body
    };

    dispatchMessages.push(
      smtpTransporter.sendMail(mailOptions).then(res => res)
    );
  });

  return Promise.all(dispatchMessages);
};

export default distributionHandler;
