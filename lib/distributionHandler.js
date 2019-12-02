import nodemailer from "nodemailer";

const distributionHandler = async (
  smtpAccount,
  subject,
  emailOptionsCollection
) => {
  let smtpTransporter = nodemailer.createTransport(smtpAccount);

  let dispatchMessages = [];

  emailOptionsCollection.forEach(emailOption => {
    let mailOptions = {
      from: smtpAccount.auth.user,
      to: emailOption.to,
      subject: subject,
      html: emailOption.html
    };

    dispatchMessages.push(
      smtpTransporter.sendMail(mailOptions).then(res => res)
    );
  });

  return Promise.all(dispatchMessages);
};

export default distributionHandler;
