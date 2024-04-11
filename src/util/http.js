export async function fetchResult(data) {
  const response = await fetch("http://localhost:3000/results", {
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
  const response = await fetch("http://localhost:3000/questions");
  const questions = await response.json();
  return questions;
}
