import ValueValidationHandler from "../src/valueValidationHandler";
import DataPropertiesModel from "../src/models/dataPropertiesModel";
import InputDataModel from "../src/models/inputDataModel";
import * as chai from "chai";
import "mocha";
import {
  GivenAValidDataSet,
  GivenAnInValidDataSetWithMissingProperties,
  GivenAnInValidDataSetWithIncorrectlyNamedProperties,
  GivenAnInValidDataSetWithMissingInputDataValues
} from "./testData/Data";

const expect = chai.expect;

const sut = "ValueValidation";

describe(sut, function() {
  describe("Given An InValid DataSet With Missing Input Data Values", function() {
    it("should return a list of validation failed responses", function() {
      let leDataSet = GivenAnInValidDataSetWithMissingInputDataValues;

      let inputData = <InputDataModel>(<unknown>leDataSet.data.InputData);

      let dataProperties = <DataPropertiesModel>(
        (<unknown>leDataSet.data.DataTemplate)
      );

      let handler = new ValueValidationHandler();

      let results = handler.ValidateValues(
        dataProperties.Properties,
        inputData.Data
      );

      // results.forEach(result => {
      //   expect(result.IsValid).to.equal(false);

      // });
    });
  });
});
