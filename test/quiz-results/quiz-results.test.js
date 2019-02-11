import quizResults from '../../src/result/calculate/quiz-results/quiz-results.js';
const test = QUnit.test;

QUnit.module('quiz results');

test('scoring an quiz result', function(assert) {
    const answers = {
        reward: 'gold'
    };

    const result = quizResults(answers);
    assert.equal(result, 'pirate');
});
