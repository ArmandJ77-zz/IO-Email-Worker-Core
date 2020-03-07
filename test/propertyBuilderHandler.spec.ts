import * as chai from "chai";
import "mocha";
import { PropertyBuilder } from "../index";
import { GivenAValidDataSetWithCallToActionUrl } from "./testData/Data";
import InputDataModel from "../src/models/inputDataModel";
import DataPropertiesModel from "../src/models/dataPropertiesModel";

const expect = chai.expect;
const sut = "PropertyBuilderHandler";

describe(sut, function() {
    describe("Given A Valid DataSet With Call To Action Url", function() {
        it("should return Input Data contianing the new build up Call to action url", function() {
            const leDataSet = GivenAValidDataSetWithCallToActionUrl;
            const inputData = (leDataSet.data.InputData as unknown) as InputDataModel;
            const dataProperties = (leDataSet.data.DataTemplate as unknown) as DataPropertiesModel;
            const propertyBuilderHandlerResponse = PropertyBuilder.Build(dataProperties, inputData);

            for (let i = 0; i < propertyBuilderHandlerResponse.Data.length; i++) {
                expect(propertyBuilderHandlerResponse.Data[i]["RegisterLink"]).to.contain("&");
                expect(propertyBuilderHandlerResponse.Data[i]["RegisterLink"]).to.contain("?");
                expect(propertyBuilderHandlerResponse.Data[i]["RegisterLink"].split("&").length - 1).to.equal(1);
                expect(propertyBuilderHandlerResponse.Data[i]["RegisterLink"].split("?").length - 1).to.equal(1);
                expect(propertyBuilderHandlerResponse.Data[i]["RegisterLink"]).to.contain("token=");
                expect(propertyBuilderHandlerResponse.Data[i]["RegisterLink"]).to.contain("data=");
            }
        });
    });
});
