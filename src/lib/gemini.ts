import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
);

export const generateEmail = async (
  name: string,
  purpose: string,
  keyPoints: string
) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Write a professional email:
  To: ${name}
  Purpose: ${purpose}
  Key Points: ${keyPoints}
  
  Make it professional, concise, and friendly.`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating email:", error);
    throw new Error("Failed to generate email. Please try again.");
  }
};
