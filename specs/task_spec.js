var assert = require("assert")
var Task = require("../task")

describe("Task", function () {
  var task1

  beforeEach(function () {
    task1 = new Task("avenge father", 5, 3, 100)
  })

  it("should have a description", function () {
    assert.strictEqual(task1.description, "avenge father")
  })

  it("should have a difficulty level", function () {
    assert.strictEqual(task1.difficulty, 5)
  })

  it("should have an urgency level", function () {
    assert.strictEqual(task1.urgency, 3)
  })

  it("should have a reward amount", function () {
    assert.strictEqual(task1.rewardAmount, 100)
  })

  it("should start as not completed", function () {
    assert.strictEqual(task1.completed, false)
  })

  it("can be completed", function () {
    task1.completeTask()
    assert.strictEqual(task1.completed, true)
  })
})
