


// src/app/api/tailor-resume/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { resumeText, jobDescription } = await req.json();

  const GROQ_API_KEY = process.env.GROQ_API_KEY ; // Use env if deployed

  if (!resumeText || !jobDescription) {
    return NextResponse.json({ error: 'Missing resume text or job description.' }, { status: 400 });
  }

  const prompt = `
You are a professional resume editor. Based on the following job description and resume, tailor the resume to better match the job description.

Job Description:
${jobDescription}

Resume:
${resumeText}

Tailored Resume:
`;

  try {
    const completion = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await completion.json();

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    return NextResponse.json({ result: data.choices?.[0]?.message?.content });
  } catch (error) {
    console.error('Groq API Error:', error);
    return NextResponse.json({ error: 'Failed to contact Groq API.' }, { status: 500 });
  }
}
