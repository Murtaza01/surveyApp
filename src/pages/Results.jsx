import { fetchResult } from "../util/http";
import useFetch from "../hooks/useFetch";

export default function Results({ userResult }) {
  const surveyResult = useFetch(fetchResult, userResult);

  return (
    <div>
      <h4>{userResult.score}</h4>
      <h4>{userResult.username}</h4>
      {surveyResult &&
        surveyResult.map(({ user, score }, index) => {
          return (
            <ul key={index}>
              <li>{user}</li>
              <li>{score}</li>
            </ul>
          );
        })}
    </div>
  );
}
