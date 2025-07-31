# 💼 AH Resume Trailer

**Tailor your resume for any job — instantly.**  
AH Resume Trailer is an AI-powered web app that lets you upload your resume and match it with a job description to generate a tailored resume. It also features a resume builder to help you start from scratch.

🔗 **Profile** [Connect with me on LinkedIn](https://www.linkedin.com/in/ayaz-hussain-cs)

🔗 **Live Demo**: [ahresumetrailer.vercel.app](https://ahresumetrailer.vercel.app/)  
📁 **GitHub Repo**: [github.com/ayaz7964/Nexium_Ayaz_Hussain_AH_ResumeTrailer](https://github.com/ayaz7964/Nexium_Ayaz_Hussain_AH_ResumeTrailer)


---

## 🔍 Features

- 📄 **Upload Resume** (PDF support)
- 🧠 **AI Tailoring** with **Gorq AI** via **n8n workflow**
- 🏗 **Resume Builder** from scratch
- ✨ **Auth via Magic Link** (email-based login)
- 🗃 **Supabase** for auth and file storage
- 📊 **MongoDB** for user-generated resume data
- 🌙 **Dark Mode** toggle
- 🚀 **CI/CD Deployment on Vercel**

---

## 🧰 Tech Stack

| Tech             | Purpose                        |
|------------------|--------------------------------|
| **Next.js 14**   | Full-stack web framework       |
| **Tailwind CSS** | Responsive design              |
| **DaisyUI**      | UI components & themes         |
| **Supabase**     | Auth & file storage            |
| **MongoDB**      | Resume data (optional)         |
| **n8n + Gorq AI**| AI workflow engine             |
| **Vercel**       | Deployment & hosting           |

---

## 🚀 Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### 1. Clone the Repository

```bash
git clone https://github.com/ayaz7964/Nexium_Ayaz_Hussain_AH_ResumeTrailer.git
cd Nexium_Ayaz_Hussain_AH_ResumeTrailer
```




## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```




Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Create .env file 

```bash 
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
GROQ_API_KEY=api_key
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
