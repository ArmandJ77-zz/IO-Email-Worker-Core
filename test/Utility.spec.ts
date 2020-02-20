import * as chai from "chai";
import { GetValueByKey, GetValuesByKey } from "../Utils/Utility";
const expect = chai.expect;

const sut = "Utility";

describe(sut, function() {
  describe("Get value by key", function() {
    it("Should return a property from a json object by key", function() {
      const testData = {
        Name: "foo",
        Surname: "bar"
      };

      var result = GetValueByKey(testData, "Surname");

      expect(result).to.equal("bar");
    });
  });
});

describe(sut, function() {
  describe("Get values from array by key", function() {
    it("Should return a list of property values from an array of objects by key", function() {
      const testData = [
        {
          Name: "foo",
          Surname: "bar"
        },
        {
          Name: "beef",
          Surname: "Lasagne"
        },
        {
          Name: "Sheppards",
          Surname: "Pie"
        }
      ];

      var result = GetValuesByKey(testData, "Name");

      expect(result[0]).to.equal("foo");
      expect(result[1]).to.equal("beef");
      expect(result[2]).to.equal("Sheppards");
    });
  });
});
