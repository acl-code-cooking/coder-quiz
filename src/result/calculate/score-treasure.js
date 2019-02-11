function scoreTreasure(answer, scorecard) {
  if(answer === 'gold') {
    scorecard.pirate += 0.5
    scorecard.viking += 0.5
  }
}

export default scoreTreasure;