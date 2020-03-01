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

      console.log(result);
    });
  });
});
