import { expect } from "chai";
import testHandler from "../domain/testHandler";

const sut = "structureValidation";

describe(sut, function() {
  describe("Given A Valid DataSet", function() {
    it("should return a succesful validation", function() {
      console.log(testHandler());
    });
  });
});
