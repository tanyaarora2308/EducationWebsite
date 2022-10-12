import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studyMaterialSchema = new Schema(
    {
    title:{
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    }
}, {timestamps: true}
);

var StudyMaterialModel = mongoose.model("StudyMaterial", studyMaterialSchema);
export default StudyMaterialModel;
