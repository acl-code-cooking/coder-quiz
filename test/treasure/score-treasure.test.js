import scoreTreasure from '../../src/result/calculate/score-treasure.js';
const test = QUnit.test;

QUnit.module('score treasure');

let scorecard = null;

QUnit.testStart(function() {
  scorecard = { pirate: 0, ninja: 0, viking: 0};
})

test('gold', function(assert) {
  scoreTreasure('gold', scorecard);
  assert.deepEqual(scorecard, { pirate: 0.5, ninja: 0, viking: 0.5})
});

test('scroll', function(assert) {
  scoreTreasure('scroll', scorecard);
  assert.deepEqual(scorecard, { pirate: 0, ninja: 1, viking: 0})
});

