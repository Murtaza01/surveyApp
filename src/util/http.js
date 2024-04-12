// const URL = "https://surveyapp-58xk.onrender.com";
// use that after finishing the app

const devURL = "http://localhost:3000";
export async function fetchResult(data) {
  const response = await fetch(`${devURL}/results`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}

export async function fetchQuestion() {
  const response = await fetch(`${devURL}/questions`);
  const questions = await response.json();
  return questions;
}
