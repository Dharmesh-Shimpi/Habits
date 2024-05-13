import express from "express";
import expressLayouts from "express-ejs-layouts";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("views", "views");
app.use(express.static("views"));
app.use(express.json());

export default app;
