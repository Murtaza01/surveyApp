export function scoreAverage(surveyResult) {
  if (surveyResult) {
    const scores = surveyResult.map(({ score }) => {
      return score;
    });
    const sumScore = scores.reduce((acc, currentValue) => {
      return acc + currentValue;
    });
    const average = scores.length / sumScore;
    const roundedAverage = Math.round(average * 100) / 100;
    return roundedAverage;
  }
}
