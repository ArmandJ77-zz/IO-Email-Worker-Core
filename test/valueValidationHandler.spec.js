// import { expect } from "chai";
// import {
//   GivenAValidDataSet,
//   GivenAnInValidDataSetWithBadValues
// } from "./testData/Data";
// import valueValidationHandler from "../domain/valueValidationHandler";

// const sut = "valueValidation";

// describe(sut, function() {
//   describe("Given A Valid DataSet", function() {
//     it("should return a succesful validation", function() {
//       let rawData = GivenAValidDataSet.data.rawData;
//       let dataTemplate = GivenAValidDataSet.data.dataTemplate.properties;

//       let result = valueValidationHandler(dataTemplate, rawData);

//       expect(result.isSuccess).to.equal(true);
//       expect(result.errors.length).to.equal(0);
//     });
//   });
// });

// describe(sut, function() {
//   describe("Given An InValid DataSet With Bad Properties", function() {
//     it("should return a unsuccesful validation", function() {
//       let leDataSet = GivenAnInValidDataSetWithBadValues;
//       let rawData = leDataSet.data.rawData;
//       let dataTemplate = leDataSet.data.dataTemplate.properties;

//       let result = valueValidationHandler(dataTemplate, rawData);

//       expect(result.isSuccess).to.equal(false);
//       expect(result.errors[0]).to.equal(
//         "valueRequired check failed on node 0: Name value "
//       );
//       expect(result.errors[1]).to.equal(
//         "number check failed on node 0: Age value sdfasdfasdf"
//       );
//       expect(result.errors[2]).to.equal(
//         "email check failed on node 0: Email value rocketman9000"
//       );
//       expect(result.errors[3]).to.equal(
//         "boolean check failed on node 0: HasCarInSpace value qwerty"
//       );
//       expect(result.errors[4]).to.equal(
//         "valueRequired check failed on node 1: HasCarInSpace value "
//       );
//       expect(result.errors[5]).to.equal(
//         "boolean check failed on node 1: HasCarInSpace value "
//       );
//     });
//   });
// });
