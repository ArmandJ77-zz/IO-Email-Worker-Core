import ValueValidationHandler from "../src/valueValidationHandler";
import DataPropertiesModel from "../src/models/dataPropertiesModel";
import InputDataModel from "../src/models/inputDataModel";
import * as chai from "chai";
import "mocha";
import {
  GivenAValidDataSet,
  GivenAnInValidDataSetWithMissingProperties,
  GivenAnInValidDataSetWithIncorrectlyNamedProperties
} from "./testData/Data";

const expect = chai.expect;

const sut = "ValueValidation";

describe(sut, function() {
  describe("Given A Valid DataSet", function() {
    it("should return a succesful validation", function() {
      let leDataSet = GivenAValidDataSet;

      let inputData = <InputDataModel>(<unknown>leDataSet.data.InputData);

      let dataProperties = <DataPropertiesModel>(
        (<unknown>leDataSet.data.DataTemplate)
      );

      let handler = new ValueValidationHandler();

      let result = handler.ValidateValues(dataProperties, inputData);
    });
  });
});
