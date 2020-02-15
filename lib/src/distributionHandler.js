var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const nodemailer = require("nodemailer");
const distributionHandler = (smtpAccount, subject, emailOptionsCollection) => __awaiter(this, void 0, void 0, function* () {
    let smtpTransporter = nodemailer.createTransport(smtpAccount);
    let dispatchMessages = [];
    emailOptionsCollection.forEach(emailOption => {
        let mailOptions = {
            from: smtpAccount.auth.user,
            to: emailOption.to,
            subject: subject,
            html: emailOption.html
        };
        dispatchMessages.push(smtpTransporter.sendMail(mailOptions).then(res => res));
    });
    return Promise.all(dispatchMessages);
});
module.exports = distributionHandler;
