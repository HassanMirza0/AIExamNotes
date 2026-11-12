import express from "express"
import isAuth from "../Middleware/isAuth.middleware.js"
import generateNotes from "../Controllers/generate.controller.js"

const notesRouter= express.Router()
notesRouter.post("",isAuth,generateNotes)
export default notesRouter;