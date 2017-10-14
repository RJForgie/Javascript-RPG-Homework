var assert = require("assert")
var Hero = require("../hero")

describe("Hero", function () {
  var hero1
  var food1
  var food2
  var task1
  var task2
  var task3

  beforeEach(function () {
    hero1 = new Hero("Inigo Montoya", 20, "cake")
    food1 = new Food("sandwich", 5)
    food2 = new Food("cake", 10)
    task1 = new Task("avenge father", 5, 3, 100)
    task2 = new Task("save Buttercup", 4, 2, 75)
    task3 = new Task("find the Dread Pirate Roberts", 2, 1, 50)
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

  it("should be able to accept tasks and add them to the log", function () {
    hero1.acceptTask(task1)
    assert.strictEqual(hero1.taskLog.length, 1)
    assert.ok(hero1.taskLog.includes(task1))
  })

  it("should be able to order tasks by difficulty", function () {
    hero1.acceptTask(task2)
    hero1.acceptTask(task1)
    hero1.acceptTask(task3)
    hero1.orderTasksByDifficulty()
    assert.deepEqual(hero1.taskLog, [task1, task2, task3])
  })

  it("should be able to order tasks by urgency", function () {
    hero1.acceptTask(task3)
    hero1.acceptTask(task1)
    hero1.acceptTask(task2)
    hero1.orderTasksByUrgency()
    assert.deepEqual(hero1.taskLog, [task1, task2, task3])
  })

  it("should be able to order tasks by reward", function () {
    hero1.acceptTask(task3)
    hero1.acceptTask(task1)
    hero1.acceptTask(task2)
    hero1.orderTasksByReward()
    assert.deepEqual(hero1.taskLog, [task1, task2, task3])
  })

  it("should be able to complete task", function () {
    hero1.acceptTask(task1)
    hero1.finishTask(task1)
    assert.strictEqual(hero1.taskLog[0].completed, true)
  })

  it("should be able to see completed tasks", function () {
    hero1.acceptTask(task1)
    hero1.acceptTask(task2)
    hero1.acceptTask(task3)
    hero1.finishTask(task2)
    hero1.finishTask(task3)
    assert.deepEqual(hero1.showCompletedTasks(), [task2, task3])
  })



  // it("should be able to see completed tasks", function () {
  //   hero1.acceptTask(task3)
  //   hero1.acceptTask(task1)
  //   hero1.acceptTask(task2)
  //
  //   hero1.orderTasksByReward()
  //   assert.deepEqual(hero1.taskLog, [task1, task2, task3])
  // })


})
