import * as chai from "chai";
import "mocha";
import {
    GivenAnInValidDataSetWithMissingInputDataValues,
    GivenAnInValidDataSetWithIncorrectEmailValues,
    GivenAnInValidDataSetWithIncorrectStringValues,
    GivenAnInValidDataSetWithIncorrectNumericsValues,
    GivenAnInValidDataSetWithIncorrectBooleanValues,
    GivenAnInValidDataSetWithIncorrectsDateValues,
} from "./testData/Data";
import { ValueValidation } from "../index";
import DataPropertiesModel from "../src/models/dataPropertiesModel";
import InputDataModel from "../src/models/inputDataModel";

const expect = chai.expect;

const sut = "ValueValidationHandler";

describe(sut, function() {
    describe("Given An InValid DataSet", function() {
        it("should return a list of validation failed responses where required = true", function() {
            const leDataSet = GivenAnInValidDataSetWithMissingInputDataValues;

            const inputData = (leDataSet.data.InputData as unknown) as InputDataModel;

            const dataProperties = (leDataSet.data.DataTemplate as unknown) as DataPropertiesModel;
            const results = ValueValidation.Validate(dataProperties, inputData);

            const testResults = results.filter(x => x.IsValid === false);
            expect(testResults.length).to.equal(6);
            testResults.forEach(result => {
                expect(result.IsValid).to.equal(false);
            });
        });

        it("should return a list of validation failed responses where emails aren't valid", function() {
            const leDataSet = GivenAnInValidDataSetWithIncorrectEmailValues;

            const inputData = (leDataSet.data.InputData as unknown) as InputDataModel;

            const dataProperties = (leDataSet.data.DataTemplate as unknown) as DataPropertiesModel;
            const results = ValueValidation.Validate(dataProperties, inputData);

            const testResults = results.filter(x => x.IsValid === false);
            expect(testResults.length).to.equal(4);

            testResults.forEach(result => {
                expect(result.Error).to.contain("email check failed");
            });
        });

        it("should return a list of validation failed responses where strings aren't valid", function() {
            const leDataSet = GivenAnInValidDataSetWithIncorrectStringValues;

            const inputData = (leDataSet.data.InputData as unknown) as InputDataModel;
            const dataProperties = (leDataSet.data.DataTemplate as unknown) as DataPropertiesModel;
            const results = ValueValidation.Validate(dataProperties, inputData);

            const testResults = results.filter(x => x.IsValid === false);

            expect(testResults.length).to.equal(6);
            testResults.forEach(result => {
                expect(result.Error).to.contain("string check failed");
            });
        });

        it("should return a list of validation failed responses where numbers aren't valid", function() {
            const leDataSet = GivenAnInValidDataSetWithIncorrectNumericsValues;

            const inputData = (leDataSet.data.InputData as unknown) as InputDataModel;
            const dataProperties = (leDataSet.data.DataTemplate as unknown) as DataPropertiesModel;
            const results = ValueValidation.Validate(dataProperties, inputData);

            const testResults = results.filter(x => x.IsValid === false);
            expect(testResults.length).to.equal(2);
            testResults.forEach(result => {
                expect(result.Error).to.contain("number check failed");
            });
        });

        it("should return a list of validation failed responses where boolean aren't valid", function() {
            const leDataSet = GivenAnInValidDataSetWithIncorrectBooleanValues;

            const inputData = (leDataSet.data.InputData as unknown) as InputDataModel;
            const dataProperties = (leDataSet.data.DataTemplate as unknown) as DataPropertiesModel;
            const results = ValueValidation.Validate(dataProperties, inputData);

            const testResults = results.filter(x => x.IsValid === false);

            expect(testResults.length).to.equal(1);
            testResults.forEach(result => {
                expect(result.Error).to.contain("boolean check failed");
            });
        });

        it("should return a list of validation failed responses where dates aren't valid", function() {
            const leDataSet = GivenAnInValidDataSetWithIncorrectsDateValues;

            const inputData = (leDataSet.data.InputData as unknown) as InputDataModel;
            const dataProperties = (leDataSet.data.DataTemplate as unknown) as DataPropertiesModel;

            const results = ValueValidation.Validate(dataProperties, inputData);

            const testResults = results.filter(x => x.IsValid === false);
            expect(testResults.length).to.equal(3);
            testResults.forEach(result => {
                expect(result.Error).to.contain("date check failed");
            });
        });
    });
});
