const app = require("./app");

const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
