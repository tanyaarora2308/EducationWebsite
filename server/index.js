import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import AuthRoute from "./Routes/AuthRoute.js"
import cors from "cors";
import QueryRoute from "./Routes/QueryRoute.js"
import FeedbackRoute from "./Routes/FeedbackRoute.js"
import AnnouncementRoute from "./Routes/AnnouncementRoute.js"
import PlaylistRoute from "./Routes/PlaylistRoute.js"
import BlogRoute from "./Routes/BlogRoute.js"
import StudyMaterialRoute from "./Routes/StudyMaterialRoute.js"

const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


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
  app.use('/playlists', PlaylistRoute)
  app.use('/blogs', BlogRoute)
  app.use('/studymaterial', StudyMaterialRoute);