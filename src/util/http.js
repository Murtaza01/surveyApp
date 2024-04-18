const URL = "https://surveyapp-58xk.onrender.com";
// use that after finishing the app

// const devURL = "http://localhost:3000";

export async function fetchQuestion() {
  const response = await fetch(`${URL}/questions`);
  const questions = await response.json();
  if (!response.ok) {
    throw new Error("failed to fetch questions");
  }
  return questions;
}

export async function fetchResult(data) {
  const response = await fetch(`${URL}/results`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error("failed to fetch Results");
  }

  return result;
}
