var assert = require("assert")
var Hero = require("../hero")

describe("Hero", function () {
  var hero1


  beforeEach(function () {
    hero1 = new Hero("Inigo Montoya", 20, "cake")
  })

  it("should have a name", function () {
    assert.strictEqual(hero1.name, "Inigo Montoya")
  })
})
