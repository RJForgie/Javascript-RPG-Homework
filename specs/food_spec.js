var assert = require("assert")
var Food = require("../food")

describe("Food", function () {
  var food1

  beforeEach(function () {
    food1 = new Food("sandwich", 5)
  })

  it("should have a type", function () {
      assert.strictEqual(food1.type, "sandwich")
  })

  it("should have a replenishment value", function () {
      assert.strictEqual(food1.replenishmentValue, 5)
  })

})
