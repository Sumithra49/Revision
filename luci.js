import fetch from "node-fetch";

async function startPuzzle() {
  try {
    const response = await fetch("https://lucio.ai/get-started"); // Replace with actual base URL
    const data = await response.json();
    console.log("Response from /get-started:", data);
  } catch (error) {
    console.error("Error fetching /get-started:", error);
  }
}

startPuzzle();
