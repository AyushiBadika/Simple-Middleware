import express, { json } from "express";

const app = express();
app.use(json());

function handleLogging(req, res, next) {
  const requestTimestamp = new Date();
  console.log("=============================================");
  console.log("HTTP Method:", req.method);
  console.log("Requested URL:", req.url);
  console.log("Request Hostname:", req.hostname);
  console.log("Request Timestamp:", requestTimestamp);
  req.requestTimestamp = requestTimestamp;
  next();
}

app.get("/getUsers", handleLogging, (req, res) => {
  const users = ["Aman", "Rohit", "Dhrumil"];
  const requestEndTimestamp = new Date();
  console.log("Request Processing Time:", requestEndTimestamp - req.requestTimestamp + "ms");
  res.json(users);
});

app.listen(5001, () => {
  console.log("Server listening at Port 5001...");
});
