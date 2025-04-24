import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
);

export const generateEmail = async (
  name: string,
  purpose: string,
  keyPoints: string
) => {
  const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-pro" });

  const prompt = `
  You are an expert email assistant. Write a polished and professional email based on the following details:
  
  1. **Recipient Name**: ${name}  
  2. **Purpose**: ${purpose}  
     (Examples: Meeting Request, Job Application, Thank You Note, Follow-Up, General Communication)  
  3. **Key Points**: ${keyPoints}  
     (Specific details or topics to include in the email.)  
  4. **Tone**: Professional, polite, and approachable.  
  
  ### Guidelines:
  - Craft an engaging subject line that reflects the email's purpose.
  - Open with a friendly and polite greeting using the recipient's name.
  - Clearly address the purpose of the email within the first two sentences.
  - Incorporate all key points logically and concisely into the body of the email.
  - Close with an appropriate call to action, gratitude, or next steps.
  - Maintain correct grammar, a formal structure, and a professional tone throughout.
  
  Ensure the email is easy to read and leaves a positive impression. Use line breaks for clarity and brevity where needed.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating email:", error);
    throw new Error("Failed to generate email. Please try again.");
  }
};
