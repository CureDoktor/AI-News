import OpenAI from "openai";

export const TranslatedText = async (message: string) => {
  console.log("ovde smo");
  const openai = new OpenAI({
    apiKey: "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",
  });

  const response = await openai.chat.completions.create({
    model: "davinci-002",
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

  return response;
};
