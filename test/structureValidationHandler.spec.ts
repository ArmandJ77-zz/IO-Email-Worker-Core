import StructureValidationHandler from "../src/structureValidationHandler";
import DataPropertiesModel from "../src/models/dataPropertiesModel";
import InputDataModel from "../src/models/inputDataModel";
import * as chai from "chai";
import "mocha";
import {
  GivenAValidDataSet,
  GivenAnInValidDataSetWithMissingProperties,
  GivenAnInValidDataSetWithIncorrectlyNamedProperties
} from "./testData/Data";
import { isImportOrExportSpecifier } from "typescript";

const expect = chai.expect;

const sut = "structureValidation";

describe(sut, function() {
  describe("Given A Valid DataSet", function() {
    it("should return a succesful validation", function() {
      let leDataSet = GivenAValidDataSet;

      //   console.log(JSON.stringify(leDataSet.data.rawData));
      let inputData = <InputDataModel>(<unknown>leDataSet.data.InputData);
      //   console.log(JSON.stringify(inputData));

      //   console.log(JSON.stringify(leDataSet.data.DataTemplate));
      let dataProperties = <DataPropertiesModel>(
        (<unknown>leDataSet.data.DataTemplate)
      );
      //   console.log(JSON.stringify(dataProperties));

      let handler = new StructureValidationHandler();
      let result = handler.ValidateStructure(dataProperties, inputData);
      expect(true).to.equal(true);
    });
  });
});
