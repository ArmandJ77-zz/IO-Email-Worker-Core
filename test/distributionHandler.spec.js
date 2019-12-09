// import { expect } from "chai";
// import IO_EWC from "../index";

// require("dotenv").config({ path: ".env" });

// const sut = "DistributionHandler";

// const RECEIVER_TEST_EMAIL_ADDRESS = process.env.RECEIVER_TEST_EMAIL_ADDRESS;
// const DISTRIBUTION_EMAIL_ADDRESS = process.env.DISTRIBUTION_EMAIL_ADDRESS;
// const DISTRIBUTION_EMAIL_PASSWORD = process.env.DISTRIBUTION_EMAIL_PASSWORD;

// const GivenAValidDistributionDataSet = {
//   smtpAccount: {
//     service: "gmail",
//     auth: {
//       user: DISTRIBUTION_EMAIL_ADDRESS,
//       pass: DISTRIBUTION_EMAIL_PASSWORD
//     }
//   },
//   emailCollection: [
//     {
//       from: DISTRIBUTION_EMAIL_ADDRESS,
//       to: RECEIVER_TEST_EMAIL_ADDRESS,
//       subject: "Tegint IO distribution",
//       text: "This is the test text",
//       body: "<h1>This Is an IO test email</h1>"
//     },
//     {
//       from: DISTRIBUTION_EMAIL_ADDRESS,
//       to: RECEIVER_TEST_EMAIL_ADDRESS,
//       subject: "Tegint IO distribution",
//       text: "This is the test text",
//       body: "<h1>This Is an IO test email</h1>"
//     }
//   ]
// };

// describe(sut, function() {
//   describe("Given valid ditribution parameters", function() {
//     it("should successfully dispatch all emails in collection", function() {
//       IO_EWC.send(
//         GivenAValidDistributionDataSet.smtpAccount,
//         GivenAValidDistributionDataSet.emailCollection
//       )
//         .then(function(result) {
//           expect(result.length).to.equal(2);
//         })
//         .catch(ex => {
//           console.log(ex);
//           expect(ex).to.equal(null);
//         });
//     });
//   });
// });
