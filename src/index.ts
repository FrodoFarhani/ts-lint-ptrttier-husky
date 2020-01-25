import express from "express";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  enum Color {
    Red = 1,
    Green = 2,
    Blue = 4
  }
  const c: Color = Color.Green;
  const defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
  const search = { food: "rich", ...defaults };
  console.log(search);

  console.log(`server started at http://localhost:${port}`);
});
