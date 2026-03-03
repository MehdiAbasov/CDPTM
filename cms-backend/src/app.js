import dotebv from "dotenv";
dotebv.config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import { errorHandler }
    from "./middleware/errorMiddleware.js";

import registerRoutes
    from "./routes/index.js";

const app = express();
/* Body */
app.use(express.json());
app.get("/", (req, res) => {
    res.send("CMS Backend API running 🚀");
});
/* Security */
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://cdptm.netlify.app"
  ]
}));
app.use(helmet());
app.use((req, res, next) => {

    mongoSanitize.sanitize(req.body);
    mongoSanitize.sanitize(req.params);

    next();

});
app.use(xss());

/* Routes */
registerRoutes(app);

/* Error */
app.use(errorHandler);

export default app;