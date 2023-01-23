import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

// making server
const PORT = 4000;
const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

const handleListening = () =>
  console.log(`"Server listening on port ${PORT} 🎈"`);

app.listen(PORT, handleListening);