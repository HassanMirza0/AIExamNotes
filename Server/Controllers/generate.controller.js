import UserModel from "../Models/user.model.js";
import NotesModel from "../Models/notes.model.js"
import generateGeminiResponse from "../services/gemini.services.js"


 const generateNotes = async (req, res) => {
    try {
        const { topic, classLevel, examType, revisionMode, includeDiagram, includeChart } = req.body;
        console.log("Received topic:", topic);
        // Log the received topic
        if (!topic) {
            return res.status(400).json({ success: false, message: "Topic is required" });
        }

        const user = await UserModel.findById(req.userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        if (user.credits < 10) {
            user.isCreditAvailaible = false;
            await user.save();
            return res.status(403).json({ success: false, message: "Insufficient credits" });
        }

        const prompt = buildPrompt(topic, classLevel, examType, revisionMode, includeDiagram, includeChart);
        console.log("Generated prompt:", prompt); // Log the generated prompt
        const aiResponse = generateGeminiResponse(prompt);
        // Deduct credits after generating notes
        const notes = await NotesModel.create({
            user: user._id,
            topic,
            classLevel,
            examType,
            revisionMode,
            includeDiagram,
            includeChart,
            content: aiResponse
        })
        user.credits -= 10;
        if (user, credits <= 0) {
            user.isCreditAvailaible = false;
        }
        if (!Array.isArray(user.notes)) {
            user.notes = [];
        }
        user.notes.push(notes._id);
        await user.save();

        return res.status(200).json({
            data: aiResponse,
            noteId: notes._id,
            creditsLeft: user.credits
        })
    }
    catch (error) {
        console.log("Error in generateNotes controller:", error.message);
        return res.status(500).json({
            error: "Ai generation failed ",
            message: error.message
        }) // Log any errors that occur
    }
}
export default generateNotes