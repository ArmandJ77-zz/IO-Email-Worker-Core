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

const expect = chai.expect;

const sut = "StructureValidationHandler";

describe(sut, function() {
  describe("Given A Valid DataSet", function() {
    it("should return a succesful validation", function() {
      let leDataSet = GivenAValidDataSet;

      let inputData = <InputDataModel>(<unknown>leDataSet.data.InputData);

      let dataProperties = <DataPropertiesModel>(
        (<unknown>leDataSet.data.DataTemplate)
      );

      let handler = new StructureValidationHandler();

      let result = handler.Validate(dataProperties, inputData);

      expect(result[0].IsValid).to.equal(true);
      expect(result[0].Error).to.equal(null);
      expect(result[0].InputDataIndex).to.equal(0);

      expect(result[1].IsValid).to.equal(true);
      expect(result[1].Error).to.equal(null);
      expect(result[1].InputDataIndex).to.equal(1);
    });
  });

  describe("Given An Invalid DataSet With Missing Properties", function() {
    it("should return a list of failed responses", function() {
      let leDataSet = GivenAnInValidDataSetWithMissingProperties;

      let inputData = <InputDataModel>(<unknown>leDataSet.data.InputData);

      let dataProperties = <DataPropertiesModel>(
        (<unknown>leDataSet.data.DataTemplate)
      );

      let handler = new StructureValidationHandler();

      let result = handler.Validate(dataProperties, inputData);

      expect(result[0].IsValid).to.equal(false);
      expect(result[0].Error).to.equal(
        "Input data mismatched with Data Template properties on: Surname"
      );
      expect(result[0].InputDataIndex).to.equal(0);

      expect(result[1].IsValid).to.equal(false);
      expect(result[1].Error).to.equal(
        "Input data mismatched with Data Template properties on: Email"
      );
      expect(result[1].InputDataIndex).to.equal(1);
    });
  });

  describe("Given An InValid DataSet With Incorrectly Named Properties", function() {
    it("should return a list of failed responses", function() {
      let leDataSet = GivenAnInValidDataSetWithIncorrectlyNamedProperties;

      let inputData = <InputDataModel>(<unknown>leDataSet.data.InputData);

      let dataProperties = <DataPropertiesModel>(
        (<unknown>leDataSet.data.DataTemplate)
      );

      let handler = new StructureValidationHandler();

      let result = handler.Validate(dataProperties, inputData);

      expect(result[0].IsValid).to.equal(true);
      expect(result[0].Error).to.equal(null);
      expect(result[0].InputDataIndex).to.equal(0);

      expect(result[1].IsValid).to.equal(false);
      expect(result[1].Error).to.equal(
        "Input data mismatched with Data Template properties on: Email,Name,Surname,Age,HasCarInSpace,DOB"
      );
      expect(result[1].InputDataIndex).to.equal(1);
    });
  });
});
