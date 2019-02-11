import scoreReward from '../reward/score-reward.js';
import rateScorecard from '../scorecard/scorecard.js';
function quizResults(answers) {
    const scorecard = { pirate: 0, ninja: 0, viking: 0 };
    scoreReward(answers.reward, scorecard);

    const result = rateScorecard(scorecard);

    return result;
}

export default quizResults;
