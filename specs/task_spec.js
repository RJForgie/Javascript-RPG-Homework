var assert = require("assert")
var Task = require("../task")

describe("Task", function () {
  var task1

  beforeEach(function () {
    task1 = new Task("beginner", "low", 5)
  })

  it("should have a difficulty level", function () {
    assert.strictEqual(task1.difficulty, "beginner")
  })

  it("should have an urgency level", function () {
    assert.strictEqual(task1.urgency, "low")
  })

  it("should have a reward amount", function () {
    assert.strictEqual(task1.rewardAmount, 5)
  })
})
