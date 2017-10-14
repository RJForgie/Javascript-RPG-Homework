Task = function (difficulty, urgency, rewardAmount) {
  this.difficulty = difficulty
  this.urgency = urgency
  this.rewardAmount = rewardAmount
  this.completed = false
}

module.exports = Task
