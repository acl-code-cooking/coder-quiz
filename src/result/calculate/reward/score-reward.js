function scoreReward(answer, scorecard) {
    if(answer === 'gold') {
        scorecard.pirate += 0.5;
        scorecard.viking += 0.5;
    } else if(answer === 'scroll') {
        scorecard.ninja += 1;
    } else if(answer === 'honor') {
        scorecard.ninja += 0.5;
        scorecard.viking += 1;
    } else {
        scorecard.pirate += 1;
    }
}

export default scoreReward;
