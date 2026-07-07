import { app } from "./app.js";
import { env } from "./config/env.config.js";

app.listen(env.port, () => {
  console.log(`Éclat Store API listening on port ${env.port}`);
});
