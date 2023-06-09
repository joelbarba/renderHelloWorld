const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <style>
    </style>
  </head>
  <body>
    <section>
      <h1>Joel Hello World</h1>
      <h2>This is a test 2</h2>
    </section>
  </body>
</html>
`;
