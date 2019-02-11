import scoreReward from '../../src/result/calculate/reward/score-reward.js';
const test = QUnit.test;

QUnit.module('score reward');

let scorecard = null;

QUnit.testStart(function() {
  scorecard = { pirate: 0, ninja: 0, viking: 0};
})

test('gold', function(assert) {
  scoreReward('gold', scorecard);
  assert.deepEqual(scorecard, { pirate: 0.5, ninja: 0, viking: 0.5})
});

test('scroll', function(assert) {
  scoreReward('scroll', scorecard);
  assert.deepEqual(scorecard, { pirate: 0, ninja: 1, viking: 0})
});

test('honor', function(assert) {
  scoreReward('honor', scorecard);
  assert.deepEqual(scorecard, { pirate: 0, ninja: 0.5, viking: 1})
});

test('jewels', function(assert) {
  scoreReward('jewels', scorecard);
  assert.deepEqual(scorecard, { pirate: 1, ninja: 0, viking: 0})
});

