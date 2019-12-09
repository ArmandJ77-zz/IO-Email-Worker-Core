// import { expect } from "chai";
// import { GivenAValidDataSet } from "./testData/Data";
// import IO_EWC from "../index";
// require("dotenv").config({ path: ".env" });

// const DISTRIBUTION_EMAIL_ADDRESS = process.env.DISTRIBUTION_EMAIL_ADDRESS;
// const DISTRIBUTION_EMAIL_PASSWORD = process.env.DISTRIBUTION_EMAIL_PASSWORD;
// const sut = "genAndSendHandler";

// describe(sut, function() {
//   describe("Given A Valid DataSet", function() {
//     it("should return a succesful generate and send response", function() {
//       let rawData = GivenAValidDataSet.data.rawData;
//       let emailTemplate = GivenAValidDataSet.data.emailTemplate;
//       let dataTemplate = GivenAValidDataSet.data.dataTemplate.properties;
//       let subject = GivenAValidDataSet.data.metaData.subject;

//       let smtpAccount = {
//         service: "gmail",
//         auth: {
//           user: DISTRIBUTION_EMAIL_ADDRESS,
//           pass: DISTRIBUTION_EMAIL_PASSWORD
//         }
//       };

//       IO_EWC.generateAndSend(
//         smtpAccount,
//         subject,
//         rawData,
//         dataTemplate,
//         emailTemplate
//       )
//         .then(function(result) {
//           expect(error).to.not.equal(null);
//           expect(result.length).to.equal(2);
//         })
//         .catch(ex => {
//           console.log(ex);
//           expect(ex).to.equal(null);
//         });
//     });
//   });
// });
