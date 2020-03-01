import DataInjectionHandler from "../src/dataInjectionHandler";
import DataPropertiesModel from "../src/models/dataPropertiesModel";
import InputDataModel from "../src/models/inputDataModel";
import * as chai from "chai";
import "mocha";
import { GivenAValidDataSet } from "./testData/Data";

const expect = chai.expect;

const sut = "DataInjectionHandler";

describe(sut, function() {
  describe("Given A Valid DataSet", function() {
    it("should return a html email with data injected", function() {
      let leDataSet = GivenAValidDataSet;
      let emailTemplate = leDataSet.data.emailTemplate;
      let inputData = <InputDataModel>(<unknown>leDataSet.data.InputData);

      let handler = new DataInjectionHandler();

      let result = handler.InjectValues(emailTemplate, inputData);

      if (result.ErrorModels.length > 0) console.log(result);
      expect(result.ErrorModels.length).to.equal(0);
      expect(result.SuccessModels.length).to.equal(2);
      expect(result.IsSuccess).to.equal(true);
    });
  });
});
