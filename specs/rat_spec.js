var assert = require("assert")
var Rat = require("../rat")

describe("Rat", function () {
  var rat1
  var food1

  beforeEach(function () {
    rat1 = new Rat("mickey")
    food1 = new Food("sandwich", 5)
  })

  it("should have a name", function () {
    assert.strictEqual(rat1.name, "mickey")
  })

  it("should be able to touch food and poison it", function () {
    rat1.touchFood(food1)
    assert.strictEqual(food1.poisoned, true)
  })

})
