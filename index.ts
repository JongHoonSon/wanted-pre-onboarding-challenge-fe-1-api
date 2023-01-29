import { createConnection } from "./models/db.js";
import app from "./app.js";

createConnection();

const port = 5000;

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
