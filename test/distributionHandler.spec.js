import { expect } from "chai";
import IO_EWC from "../index";

require("dotenv").config({ path: ".env" });

const sut = "DistributionHandler";

const RECEIVER_TEST_EMAIL_ADDRESS = process.env.RECEIVER_TEST_EMAIL_ADDRESS;
const DISTRIBUTION_EMAIL_ADDRESS = process.env.DISTRIBUTION_EMAIL_ADDRESS;
const DISTRIBUTION_EMAIL_PASSWORD = process.env.DISTRIBUTION_EMAIL_PASSWORD;

const GivenAValidDistributionDataSet = {
  smtpAccount: {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: DISTRIBUTION_EMAIL_ADDRESS,
      pass: DISTRIBUTION_EMAIL_PASSWORD
    }
  },
  emailCollection: [
    {
      from: DISTRIBUTION_EMAIL_ADDRESS,
      to: RECEIVER_TEST_EMAIL_ADDRESS,
      subject: "Tegint IO distribution",
      text: "This is the test text",
      body: "<h1>This Is an IO test email</h1>"
    },
    {
      from: DISTRIBUTION_EMAIl_ADDRESS,
      to: RECEIVER_TEST_EMAIL_ADDRESS,
      subject: "Tegint IO distribution",
      text: "This is the test text",
      body: "<h1>This Is an IO test email</h1>"
    }
  ]
};

describe(sut, function() {
  describe("Given valid ditribution parameters", function() {
    it("should successfully dispatch all emails in colelction using ditrobution account", function() {
      try {
        let result = IO_EWC.send(
          GivenAValidDistributionDataSet.account,
          GivenAValidDistributionDataSet.emailCollection
        );
      } catch (error) {
        console.log(error);
      }
    });
  });
});
