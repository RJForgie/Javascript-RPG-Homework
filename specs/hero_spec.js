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


})
