import { expect } from "chai";
import { GivenAValidDataSet } from "./testData/Data";
import dataInjectionHandler from "../lib/dataInjectionHandler";
import generationHandler from "../lib/generationHandler";

const sut = "generationHandler";

describe(sut, function() {
  describe("Given A Valid DataSet", function() {
    it("should return a succesful generation response", function() {
      let leDataSet = GivenAValidDataSet;
      let rawData = leDataSet.data.rawData;
      let emailTemplate = leDataSet.data.emailTemplate;

      let dataInjectionResult = dataInjectionHandler(rawData, emailTemplate);

      let result = generationHandler(dataInjectionResult.data);

      expect(result.isSuccess).to.equal(true);
    });
  });
});
