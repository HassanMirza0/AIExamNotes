const Gemini_URL = "https://api.gemini.com/v1/pubticker/btcusd";
 const generateGeminiResponse = async (prompt) => {
    try {
        const response = await fetch(`${Gemini_URL}?{process.env.GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: {
                                text: prompt
                            }
                        }
                    ]
                })
            });

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error("Failed to fetch Gemini data: " + errorData);
        }
        const data = await response.json();
        const text = data.candidate?.[0]?.content?.parts?.[0]?.text;

        if (!text) {
            throw new Error("Invalid response structure from Gemini API");
        }
        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        return JSON.parse(cleanedText);
    } catch (error) {
        console.error("Error fetching Gemini data:", error);
    }
}
export default generateGeminiResponse;