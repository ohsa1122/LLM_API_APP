'use server';

import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://api.deepinfra.com/v1/openai',
  apiKey: "uN0AqJKYwUtjhWmtinecRpx9qwEBDrRa",
});

export default async function generateResponse(prompt: string) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'meta-llama/Meta-Llama-3-70B-Instruct',
  });

  return completion.choices[0].message.content;
}






