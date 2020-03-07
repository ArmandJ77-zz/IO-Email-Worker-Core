import * as chai from "chai";
import "mocha";
import { StructureValidation } from "../index";
import {
    GivenAValidDataSet,
    GivenAnInValidDataSetWithMissingProperties,
    GivenAnInValidDataSetWithIncorrectlyNamedProperties,
} from "./testData/Data";
import DataPropertiesModel from "../src/models/dataPropertiesModel";
import InputDataModel from "../src/models/inputDataModel";

const expect = chai.expect;

const sut = "StructureValidationHandler";

describe(sut, function() {
    describe("Given A Valid DataSet", function() {
        it("should return a succesful validation", function() {
            const leDataSet = GivenAValidDataSet;

            const inputData = (leDataSet.data.InputData as unknown) as InputDataModel;

            const dataProperties = (leDataSet.data.DataTemplate as unknown) as DataPropertiesModel;
            const result = StructureValidation.Validate(dataProperties, inputData);

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
            const leDataSet = GivenAnInValidDataSetWithMissingProperties;

            const inputData = (leDataSet.data.InputData as unknown) as InputDataModel;

            const dataProperties = (leDataSet.data.DataTemplate as unknown) as DataPropertiesModel;

            const result = StructureValidation.Validate(dataProperties, inputData);

            expect(result[0].IsValid).to.equal(false);
            expect(result[0].Error).to.equal("Input data mismatched with Data Template properties on: Surname");
            expect(result[0].InputDataIndex).to.equal(0);

            expect(result[1].IsValid).to.equal(false);
            expect(result[1].Error).to.equal("Input data mismatched with Data Template properties on: Email");
            expect(result[1].InputDataIndex).to.equal(1);
        });
    });

    describe("Given An InValid DataSet With Incorrectly Named Properties", function() {
        it("should return a list of failed responses", function() {
            const leDataSet = GivenAnInValidDataSetWithIncorrectlyNamedProperties;

            const inputData = (leDataSet.data.InputData as unknown) as InputDataModel;

            const dataProperties = (leDataSet.data.DataTemplate as unknown) as DataPropertiesModel;
            const result = StructureValidation.Validate(dataProperties, inputData);

            expect(result[0].IsValid).to.equal(true);
            expect(result[0].Error).to.equal(null);
            expect(result[0].InputDataIndex).to.equal(0);

            expect(result[1].IsValid).to.equal(false);
            expect(result[1].Error).to.equal(
                "Input data mismatched with Data Template properties on: Email,Name,Surname,Age,HasCarInSpace,DOB",
            );
            expect(result[1].InputDataIndex).to.equal(1);
        });
    });
});
