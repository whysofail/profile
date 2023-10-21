const path = require('path')
const express = require("express");
const app = express();


app.use(express.static(__dirname + '/views'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
