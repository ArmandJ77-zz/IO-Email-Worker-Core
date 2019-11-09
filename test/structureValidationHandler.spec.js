// import { expect } from "chai";
// import {
//   GivenAValidDataSet,
//   GivenAnInValidDataSetWithMissingProperties
// } from "./testData/Data";
// import structureValidationHandler from "../domain/handlers/structureValidationHandler";

// const sut = "structureValidation";

// describe(sut, function() {
//   describe("Given A Valid DataSet", function() {
//     it("should return a succesful validation", function() {
//       let leDataSet = GivenAValidDataSet;

//       let rawData = leDataSet.data.rawData;
//       let dataTemplate = leDataSet.data.dataTemplate.properties;

//       let result = structureValidationHandler(dataTemplate, rawData);

//       result.forEach(response => {
//         expect(response.isSuccess).to.equal(true);
//         expect(response.errors).to.equal(null);
//       });
//     });
//   });
// });

// describe(sut, function() {
//   describe("Given An InValid DataSet With Bad Properties", function() {
//     it("should return a failed response per node with missing properties", function() {
//       let leDataSet = GivenAnInValidDataSetWithMissingProperties;
//       let rawData = leDataSet.data.rawData;
//       let dataTemplate = leDataSet.data.dataTemplate.properties;

//       let result = structureValidationHandler(dataTemplate, rawData);

//       expect(result[0].isSuccess).to.equal(false);
//       expect(result[0].errors).to.not.equal(null);
//       expect(result[0].errors.includes("Name")).to.equal(true);
//       expect(result[0].errors.includes("Age")).to.equal(true);
//       expect(result[0].errors.includes("Email")).to.equal(true);
//       expect(result[0].errors.includes("DOB")).to.equal(true);
//       expect(
//         result[0].errors.includes("missing properties: Surname,HasCarInSpace")
//       ).to.equal(true);

//       expect(result[1].isSuccess).to.equal(false);
//       expect(result[1].errors).to.not.equal(null);
//       expect(result[1].errors.includes("Surname")).to.equal(true);
//       expect(result[1].errors.includes("Email")).to.equal(true);
//       expect(result[1].errors.includes("DOB")).to.equal(true);
//       expect(
//         result[1].errors.includes("missing properties: Name,Age,HasCarInSpace")
//       ).to.equal(true);
//     });
//   });
// });
