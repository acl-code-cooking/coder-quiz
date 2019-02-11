function scoreReward(answer, scorecard) {
    if(answer === 'gold') {
        scorecard.pirate += 1;
    } else if(answer === 'scroll') {
        scorecard.ninja += 1;
    } else {
        scorecard.viking += 1;
    }
}

export default scoreReward;
