import mongoose from "mongoose";

const enrolledStudentsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    courses:{
      type:[String],
   }
  },
  { timestamps: true }
);



const EnrolledStudentsModel = mongoose.model("EnrolledStudents", enrolledStudentsSchema);
export default EnrolledStudentsModel;
