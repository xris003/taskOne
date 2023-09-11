const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Set the port to 3000 for localhost

// Function to get the current UTC time
function getCurrentUTC() {
  return moment().format("YYYY-MM-DDTHH:mm:ss[Z]");
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

app.get("/", (req, res) => {
  res.send("Welcome to HNGx Page for Chris Gabriel");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
