import { app } from "./app";
import { config } from "./config/env";

const port = config.port;

app.listen(port, () => {
  console.log(
    `[vendorhub-api] Server running on http://localhost:${port} in ${config.env} mode`
  );
});
