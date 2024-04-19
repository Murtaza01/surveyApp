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
        "Lorem  officia totam, commodi animi illum culpa nisi obcaecati, aspernatur dolores provident sint optio cupiditate repellendus. Eveniet consectetur ipsa ex.",
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
      message: "mid score",
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
      message: "high score",
    });
  }
}
