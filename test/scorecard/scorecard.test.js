import rateScorecard from '../../src/result/calculate/scorecard/scorecard.js';
const test = QUnit.test;

QUnit.module('rate scorecard');

test('pirate', function(assert) {
    const result = rateScorecard({ pirate: 1, ninja: 0, viking: 0 });
    assert.deepEqual(result, 'pirate');
});

test('ninja', function(assert) {
    const result = rateScorecard({ pirate: 0, ninja: 1, viking: 0 });
    assert.deepEqual(result, 'ninja');
});

test('viking', function(assert) {
    const result = rateScorecard({ pirate: 0, ninja: 0, viking: 1 });
    assert.deepEqual(result, 'viking');
});
