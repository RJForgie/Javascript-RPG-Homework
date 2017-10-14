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

  it("should have a boost value", function () {
      assert.strictEqual(food1.boost, 5)
  })

  it("should start as not poisoned", function () {
      assert.strictEqual(food1.poisoned, false)
  })

  it("should be able to absorb poison", function () {
      food1.absorbPoison()
      assert.strictEqual(food1.poisoned, true)
  })

})
