const URL = "https://surveyapp-58xk.onrender.com";

export async function fetchResult(data) {
  const response = await fetch(`${URL}/results`, {
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
  const response = await fetch(`${URL}/questions`);
  const questions = await response.json();
  return questions;
}
