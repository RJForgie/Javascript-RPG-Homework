var assert = require("assert")
var Hero = require("../hero")

describe("Hero", function () {
  var hero1
  var food1
  var food2

  beforeEach(function () {
    hero1 = new Hero("Inigo Montoya", 20, "cake")
    food1 = new Food("sandwich", 5)
    food2 = new Food("cake", 10)
  })

  it("should have a name", function () {
    assert.strictEqual(hero1.name, "Inigo Montoya")
  })

  it("should have a health value", function () {
    assert.strictEqual(hero1.health, 20)
  })

  it("should have a favouriteFood", function () {
    assert.strictEqual(hero1.favouriteFood, "cake")
  })

  it("should start with empty task log", function () {
    assert.strictEqual(hero1.taskLog.length, 0)
  })

  it("should be able to talk", function () {
    assert.strictEqual(hero1.talk(), "Hello, my name is Inigo Montoya. You killed my father, prepare to die!")
  })

  it("should be able to eat food and gain replenishment", function () {
    hero1.eat(food1)
    assert.strictEqual(hero1.health, 25)
  })

  it("should be able to gain 1.5x replenishment from favouriteFood", function () {
    hero1.eat(food2)
    assert.strictEqual(hero1.health, 35)
  })


})
