import fetch from "node-fetch";

async function startPuzzle() {
  try {
    const response = await fetch("https://your-full-api-url/get-started"); // Replace with real URL
    const text = await response.text();
    console.log("Response text:", text);
  } catch (error) {
    console.error("Error fetching /get-started:", error);
  }
}

startPuzzle();
