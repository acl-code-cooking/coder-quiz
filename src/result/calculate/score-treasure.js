function scoreTreasure(answer, scorecard) {
  if(answer === 'gold') {
    scorecard.pirate += 0.5
    scorecard.viking += 0.5
  } else if(answer === 'scroll') {
    scorecard.ninja += 1
  }
}

export default scoreTreasure;