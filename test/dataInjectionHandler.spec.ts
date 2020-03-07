import * as chai from "chai";
import "mocha";
import { DataInjection } from "../index";
import InputDataModel from "../src/models/inputDataModel";
import { GivenAValidDataSet } from "./testData/Data";

const expect = chai.expect;
const sut = "DataInjectionHandler";

describe(sut, function() {
    describe("Given A Valid DataSet", function() {
        it("should return a html email with data injected", function() {
            const leDataSet = GivenAValidDataSet;
            const emailTemplate = leDataSet.data.emailTemplate;
            const inputData = (leDataSet.data.InputData as unknown) as InputDataModel;

            const result = DataInjection.InjectValues(emailTemplate, inputData);

            if (result.ErrorModels.length > 0) console.log(result);
            expect(result.ErrorModels.length).to.equal(0);
            expect(result.SuccessModels.length).to.equal(2);
            expect(result.IsSuccess).to.equal(true);
        });
    });

    // describe("Given A Valid DataSet With Call To Action Url", function() {
    //   it("should return a html email with data injected", function() {
    //     const leDataSet = GivenAValidDataSetWithCallToActionUrl;
    //     const emailTemplate = leDataSet.data.emailTemplate;
    //     const inputData = <InputDataModel>(<unknown>leDataSet.data.InputData);

    //     const handler = new DataInjectionHandler();

    //     const result = handler.InjectValues(emailTemplate, inputData);

    //     if (result.ErrorModels.length > 0) console.log(result);
    //     expect(result.ErrorModels.length).to.equal(0);
    //     expect(result.SuccessModels.length).to.equal(2);
    //     expect(result.IsSuccess).to.equal(true);

    //     expect(result.SuccessModels[0].Email()).to.equal(true);
    //   });
    // });
});
