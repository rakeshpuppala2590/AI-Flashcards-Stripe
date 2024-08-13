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
9: only generate 10 flashcards.
10: aim to create a balenced set of flashcards that covers the topic comprehensively.
11. If give a body of text, extract the most important and relevant information for the flashcards.

Return in the following JSON format:

{
    "flashcards":[{
        "front":str,
        "back": str
    }]
}

`;

export async function POST(req) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const prompt = req.text();
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o", // Use a valid model name
      messages: [
        { role: "user", content: prompt },
        {
          role: "system",
          content: systemPrompt,
        },
      ],
      response_format: { type: "json_object" },
    });

    console.log(completion.choices[0].message.content);
    const flashcards = JSON.parse(completion.choices[0].message.content);
    return NextResponse.json(flashcards.flashcards); // Adjust according to the response structure
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return "Sorry, couldn't fetch recipe suggestions.";
  }
}