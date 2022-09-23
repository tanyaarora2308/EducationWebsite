import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import AuthRoute from "./Routes/AuthRoute.js"
import QueryRoute from "./Routes/QueryRoute.js"
import FeedbackRoute from "./Routes/FeedbackRoute.js"
import AnnouncementRoute from "./Routes/AnnouncementRoute.js"
import AssignmentRoute from "./Routes/AssignmentRoute.js"

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));


  app.use('/auth',AuthRoute)
  app.use('/query', QueryRoute)
  app.use('/feedback', FeedbackRoute)
  app.use('/announcements', AnnouncementRoute)
  app.use('/assignments', AssignmentRoute)