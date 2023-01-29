import { createConnection } from "./models/db";
import app from "./app";

createConnection();

const port = 5000;

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
