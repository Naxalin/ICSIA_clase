import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function analyzeImage(buffer, mimeType = 'image/jpeg') {
  const base64 = Buffer.from(buffer).toString('base64');
  
  console.log('mimeType:', mimeType);
  console.log('base64 length:', base64.length);
  console.log('base64 preview:', base64.substring(0, 50));

  const response = await groq.chat.completions.create({
    model: "meta-llama/llama-4-scout-17b-16e-instruct",
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'image_url',
            image_url: {
              url: `data:${mimeType};base64,${base64}`,
            },
          },
          {
            type: 'text',
            text: 'List all the objects, elements and subjects you can see in this image. Respond ONLY with a JSON array of strings in English, no explanation. Example: ["cat","chair","window"]',
          },
        ],
      },
    ],
    max_tokens: 500,
  });

  const text = response.choices[0]?.message?.content || '[]';

  try {
    const clean = text.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(clean);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    const matches = text.match(/"([^"]+)"/g);
    if (matches) return matches.map(m => m.replace(/"/g, ''));
    return [];
  }
}