import nodemailer from "nodemailer";

const distributionHandler = async (smtpAccount, emailOptionsCollection) => {
  let smtpTransporter = nodemailer.createTransport({
    service: smtpAccount.service,
    auth: {
      user: smtpAccount.auth.user,
      pass: smtpAccount.auth.pass
    }
  });

  let responses = [];

  emailOptionsCollection.forEach(async emailOption => {
    let mailOptions = {
      from: emailOption.from,
      to: emailOption.to,
      subject: emailOption.subject,
      text: emailOption.text,
      html: emailOption.body
    };

    let response = await send(smtpTransporter, mailOptions).then(res => res);

    responses.push(response);
  });

  return responses;
};

const send = async (smtpTransporter, mailOptions) => {
  return smtpTransporter
    .sendMail(mailOptions)
    .then(info => {
      return info;
    })
    .catch(err => {
      return err;
    });
};

function buildResponse(dispatchState, dispatchMessage, mailOptions, err) {
  return {
    dispatchState,
    dispatchMessage,
    mailOptions,
    err
  };
}

export default distributionHandler;
