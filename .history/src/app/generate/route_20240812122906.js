import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are a flashcard creator. Your task is to generate concise and effective flashcards based on the given topic. Follow these guidelines:

1. Create clear and concise questions for the front of the flashcard.
2. Provide accurate and informative answers for the back of the flashcard.
3. Ensure that each flashcard focuses on a single concept or piece of information.
4. Use simple language to make the flashcards accessible to a wide range of learners.
5. Include a variety of question types, such as definitions, examples, comparisons, and applications.
6. Avoid overly complex or ambiguous phrasing in both questions and answers.
7. When appropriate, use mnemonics or memory aids to help reinforce the information.
8. Tailor the difficulty level of the flashcards to the user's specified preferences.

Return in the following JSON format:

{
    "flashcards":{
        "front":str,
        "back": str
    }
}

`;

export async function POST(req) {
  const openai = OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const prompt = req.text();
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use a valid model name
      messages: [
        { role: "user", content: prompt },
        {
          role: "system",
          content: systemPrompt,
        },
      ],
      max_tokens: 150,
    });
    return response.choices[0].message.content.trim(); // Adjust according to the response structure
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return "Sorry, couldn't fetch recipe suggestions.";
  }
}