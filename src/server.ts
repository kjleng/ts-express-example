import { config } from "./config";
import app from "./app";

app.listen(config.appPort, () => {
  console.log(`Server is running on http://localhost:${config.appPort}`);
});
