import { expect } from "chai";
import IO_EWC from "../index";

const sut = "structureValidation";

describe(sut, function() {
  describe("Given A Valid DataSet", function() {
    it("should return a succesful validation", function() {
      let value = IO_EWC.getMessage("armand");
      expect(value).to.equal("Hi, armand");
    });
  });
});
