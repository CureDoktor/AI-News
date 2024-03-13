import OpenAI from "openai";

export const TranslatedText = async (message: string) => {
  const openai = new OpenAI({
    apiKey: "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",
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "system",
        "content":
          "You will be provided with a sentence in English, and your task is to translate it into Serbian.",
      },
      {
        "role": "user",
        "content": message,
      },
    ],
    temperature: 0.7,
    max_tokens: 64,
    top_p: 1,
  });
  console.log(response.choices[0].message.content);

  return response.choices[0].message.content;
};
