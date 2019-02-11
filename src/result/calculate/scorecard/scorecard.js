function rateScorecard(scorecard) {
    const pirate = scorecard.pirate;
    const ninja = scorecard.ninja;
    const viking = scorecard.viking;

    if(pirate > ninja && pirate > viking) {
        return 'pirate';
    }

    if(ninja > pirate && ninja > viking) {
        return 'ninja';
    }

    if(viking > pirate && viking > ninja) {
        return 'viking';
    }
}

export default rateScorecard;
