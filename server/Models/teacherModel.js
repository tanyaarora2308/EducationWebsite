import mongoose from "mongoose";

const TeacherSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      default:"student"
    },
    subject:{
        type:String
    }
  },
  { timestamps: true }
);



const TeacherModel = mongoose.model("Teachers", TeacherSchema);
export default TeacherModel;
