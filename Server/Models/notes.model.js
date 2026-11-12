import mongoose from "mongoose";
import UserModel from "./user.model.js";

const notesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
        required: true,

    },
    topic: {
        type: String,
        required: true,

    },

    classLevel: String,
    examType: String,

    revisionMode: {
        type: Boolean,
        default: false
    },
    includeDiagram: Boolean,
    includeChart: Boolean,

    content: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },



}, { timestamps: true });


const NotesModel = mongoose.model("NotesModel", notesSchema);
export default NotesModel;