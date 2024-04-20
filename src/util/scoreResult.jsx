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
      message:
        "your low score indicates that your well-being needs your time and attention, please take care of your  soul, its your most valuable possessions ",
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
      message:
        "you have a balanced life, you are in a good position to improve your well-being and pay more attention to the things that really matters ",
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
      message:
        "Your high score indicates that you have a great quality of life, be proud and thankful to whomever who were a part that contributed in that, try to maintain and improve upon your life.",
    });
  }
}
