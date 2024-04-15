import Figure from "../components/Figure";
import errorViolet from "../assets/svg/errorFigureViolet.svg";
import errorYellow from "../assets/svg/errorFigureYellow.svg";

let showResult = {};
export function scoreResult(score, prevTheme) {
  if (score <= 19) {
    return (showResult = {
      figure: (
        <Figure
          theme={prevTheme}
          figureLight={errorYellow}
          figureDark={errorViolet}
        />
      ),
      message: <p>you didn't do good</p>,
    });
  } else if (score <= 39) {
    return (showResult = {
      figure: (
        <Figure
          theme={prevTheme}
          figureLight={errorYellow}
          figureDark={errorViolet}
        />
      ),
      message: <p>you did ok</p>,
    });
  } else {
    return (showResult = {
      figure: (
        <Figure
          theme={prevTheme}
          figureLight={errorYellow}
          figureDark={errorViolet}
        />
      ),
      message: <p>you did good</p>,
    });
  }
}
