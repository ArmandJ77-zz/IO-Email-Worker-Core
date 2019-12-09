// import { expect } from "chai";
// import { GivenAValidDataSet } from "./testData/Data";
// import IO_EWC from "../index";

// const sut = "dataInjectionHandler";

// describe(sut, function() {
//   describe("Given A Valid DataSet", function() {
//     it("should return a succesful data injection response", function() {
//       let leDataSet = GivenAValidDataSet;
//       let rawData = leDataSet.data.rawData;
//       let dataTemplate = leDataSet.data.dataTemplate.properties;
//       let emailTemplate = leDataSet.data.emailTemplate;

//       let structureValidationResponse = IO_EWC.validateStructure(
//         dataTemplate,
//         rawData
//       );
//       structureValidationResponse.forEach(response => {
//         expect(response.isSuccess).to.equal(true);
//         expect(response.errors).to.equal(null);
//       });

//       let valueValidationHandlerResponse = IO_EWC.validateValues(
//         dataTemplate,
//         rawData
//       );
//       expect(valueValidationHandlerResponse.isSuccess).to.equal(true);
//       expect(valueValidationHandlerResponse.errors.length).to.equal(0);

//       let result = IO_EWC.injectData(rawData, emailTemplate);

//       expect(result.isSuccess).to.equal(true);
//     });
//   });
// });
