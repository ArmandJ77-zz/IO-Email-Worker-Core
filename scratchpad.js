import IO_EWC from "./index";
require("dotenv").config({ path: ".env" });
// import IO_EWC from "io-email-worker-utility";

const RECEIVER_TEST_EMAIL_ADDRESS = process.env.RECEIVER_TEST_EMAIL_ADDRESS;
const DISTRIBUTION_EMAIL_ADDRESS = process.env.DISTRIBUTION_EMAIL_ADDRESS;
const DISTRIBUTION_EMAIL_PASSWORD = process.env.DISTRIBUTION_EMAIL_PASSWORD;

const GivenAValidDistributionDataSet = {
  smtpAccount: {
    service: "gmail",
    auth: {
      user: DISTRIBUTION_EMAIL_ADDRESS,
      pass: DISTRIBUTION_EMAIL_PASSWORD
    }
  },
  emailCollection: [
    {
      from: DISTRIBUTION_EMAIL_ADDRESS,
      to: "s@s",
      subject: "Testing IO distribution",
      body: "<h1>This Is an IO test email</h1>"
    },
    {
      from: DISTRIBUTION_EMAIL_ADDRESS,
      to: RECEIVER_TEST_EMAIL_ADDRESS,
      subject: "Testing IO distribution",
      body: "<h1>This Is an IO test email</h1>"
    }
  ]
};

IO_EWC.send(
  GivenAValidDistributionDataSet.smtpAccount,
  "Testing IO distribution",
  GivenAValidDistributionDataSet.emailCollection
)
  .then(res => console.log(res))
  .catch(ex => console.log(ex));

// console.log(DISTRIBUTION_EMAIL_ADDRESS);
// console.log(DISTRIBUTION_EMAIL_PASSWORD);

// async function send() {
//   console.log("Starting await");

//   console.log("scratchpad result:" + results);
// }

// send();
// console.log("end await");
// let response = IO_EWC.send(
//   GivenAValidDistributionDataSet.smtpAccount,
//   GivenAValidDistributionDataSet.emailCollection
// );

// console.log("scratchpad result:" + response);
