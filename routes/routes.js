import app from "../index.js";
import detailRoute from "./detailRoute.js";
import weekRoute from "./weekRoutes.js";

app.use("/", detailRoute)
app.use("/week", weekRoute)

export default app  