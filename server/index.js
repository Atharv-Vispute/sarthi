// Backend test server with Express
const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello from Express backend!");
});
// test route
app.get("/api/hello", (req, res) => {
  res.json({massege:"Hello and hi from backend!"} );
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});


