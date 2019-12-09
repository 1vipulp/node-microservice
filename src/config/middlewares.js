/**
 * Configuration of the server middlewares.
 */
import bodyParser from "body-parser";
import cors from "cors";

// const MORGAN_COMBINE_FORMAT = "combined";

export default app => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};
