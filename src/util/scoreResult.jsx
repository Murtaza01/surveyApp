import Figure from "../components/Figure";
import highScoreViolet from "../assets/svg/highScoreViolet.svg";
import highScoreYellow from "../assets/svg/highScoreYellow.svg";
import lowScoreYellow from "../assets/svg/lowScoreYellow.svg";
import lowScoreViolet from "../assets/svg/lowScoreViolet.svg";
import midScoreViolet from "../assets/svg/midScoreViolet.svg";
import midScoreYellow from "../assets/svg/midScoreYellow.svg";

let showResult = {};
export function scoreResult(score, prevTheme) {
  if (score <= 19) {
    return (showResult = {
      figure: (
        <Figure
          theme={prevTheme}
          figureLight={lowScoreYellow}
          figureDark={lowScoreViolet}
        />
      ),
      message: <p>you didn't do good</p>,
    });
  } else if (score <= 39) {
    return (showResult = {
      figure: (
        <Figure
          theme={prevTheme}
          figureLight={midScoreViolet}
          figureDark={midScoreYellow}
        />
      ),
      message: <p>you did ok</p>,
    });
  } else {
    return (showResult = {
      figure: (
        <Figure
          theme={prevTheme}
          figureLight={highScoreViolet}
          figureDark={highScoreYellow}
        />
      ),
      message: <p>you did good</p>,
    });
  }
}
