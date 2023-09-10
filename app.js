const express = require("express");
const app = express();
const port = 3000; // Set the port to 3000 for localhost

// Function to get the current UTC time with validation of +/-2 minutes
function getCurrentUTC() {
  const now = new Date();
  const utcTime = now.toISOString().slice(0, -1) + "Z";
  return utcTime;
}

app.get("/api", (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Validate that both query parameters are provided
  if (!slackName || !track) {
    return res
      .status(400)
      .json({ error: "Both slack_name and track parameters are required." });
  }

  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });
  const utcTime = getCurrentUTC();

  // Replace these with your actual GitHub URLs
  const githubFileURL = "https://github.com/xris003/taskOne/blob/main/app.js";
  const githubRepoURL = "https://github.com/xris003/taskOne";

  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileURL,
    github_repo_url: githubRepoURL,
    status_code: 200,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
