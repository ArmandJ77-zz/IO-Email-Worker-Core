import { expect } from "chai";
import {
  GivenAValidDataSet,
  GivenAnInValidDataSetWithMissingProperties,
  GivenAnInValidDataSetWithIncorrectlyNamedProperties
} from "./testData/Data";
const IO_EWC = require("./../IO_EWC");

const sut = "structureValidation";

describe(sut, function() {
  describe("Given A Valid DataSet", function() {
    it("should return a succesful validation", function() {
      let leDataSet = GivenAValidDataSet;

      let rawData = leDataSet.data.rawData;
      let dataTemplate = leDataSet.data.dataTemplate.properties;

      let result = IO_EWC.validateStructureAgainstTemplate(
        dataTemplate,
        rawData
      );
      // result.forEach(response => {
        expect(response.isSuccess).to.equal(true);
        expect(response.errors).to.equal(null);
      });
    });
  });
});

describe(sut, function() {
  describe("Given An InValid DataSet With Bad Properties", function() {
    it("should return a failed response per node with missing properties", function() {
      let leDataSet = GivenAnInValidDataSetWithMissingProperties;
      let rawData = leDataSet.data.rawData;
      let dataTemplate = leDataSet.data.dataTemplate.properties;

      let result = IO_EWC.validateStructureAgainstTemplate(
        dataTemplate,
        rawData
      );

      expect(result[0].isSuccess).to.equal(false);
      expect(result[0].errors).to.not.equal(null);
      expect(result[0].errors.includes("Name")).to.equal(true);
      expect(result[0].errors.includes("Age")).to.equal(true);
      expect(result[0].errors.includes("Email")).to.equal(true);
      expect(result[0].errors.includes("DOB")).to.equal(true);
      expect(
        result[0].errors.includes("missing properties: Surname,HasCarInSpace")
      ).to.equal(true);

      expect(result[1].isSuccess).to.equal(false);
      expect(result[1].errors).to.not.equal(null);
      expect(result[1].errors.includes("Surname")).to.equal(true);
      expect(result[1].errors.includes("Email")).to.equal(true);
      expect(result[1].errors.includes("DOB")).to.equal(true);
      expect(
        result[1].errors.includes("missing properties: Name,Age,HasCarInSpace")
      ).to.equal(true);
    });
  });
});

describe(sut, function() {
  describe("Given An InValid DataSet With incorrectly names json nodes", function() {
    it("should return a failed response per node detailing the missing nodes", function() {
      let leDataSet = GivenAnInValidDataSetWithIncorrectlyNamedProperties;
      let rawData = leDataSet.data.rawData;
      let dataTemplate = leDataSet.data.dataTemplate.properties;

      let result = IO_EWC.validateStructureAgainstTemplate(
        dataTemplate,
        rawData
      );

      expect(result.length).to.equal(2);

      expect(result[0].isSuccess).to.equal(false);
      expect(result[0].errors).to.equal(
        'Diff found on: {"Name":"Elon","lastname":"Musk","Age":48,"Email":"rocketman9000@marsmail.com","HasCarInSpace":"true","DOB":"1971-06-28"} \n' +
          " missing properties: Surname"
      );

      expect(result[1].isSuccess).to.equal(false);
      expect(result[1].errors).to.equal(
        'Diff found on: {"Name":"Jeff","Surname":"Bezos","Age":55,"Email":"jungleking@amazon.com","hcis":"false","DOB":"1964-01-12"} \n' +
          " missing properties: HasCarInSpace"
      );
    });
  });
});
