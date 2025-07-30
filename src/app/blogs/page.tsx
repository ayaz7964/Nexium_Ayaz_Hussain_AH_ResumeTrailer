'use client'
import React, { useState } from "react";
import Link from "next/link";

const blogPosts = [
    {
        id: 1,
        title: "How AI is Changing Resume Building in 2025",
        excerpt:
            "Discover how AI technology is revolutionizing the way resumes are crafted and tailored to job descriptions.",
        fullDescription:
            "Artificial intelligence is transforming resume building by analyzing job descriptions and optimizing resumes for ATS systems, helping job seekers tailor their applications for maximum impact.",
        date: "July 20, 2025",
    },
    {
        id: 2,
        title: "5 Tips to Optimize Your Resume for ATS",
        excerpt:
            "Learn essential tips to help your resume pass Applicant Tracking Systems and reach recruiters.",
        fullDescription:
            "To pass ATS, use relevant keywords from the job post, avoid complex formatting, and ensure your resume is clear and concise. Tailoring your resume for each application increases your chances.",
        date: "June 15, 2025",
    },
    {
        id: 3,
        title: "The Power of Magic Link Authentication",
        excerpt:
            "Why passwordless login with magic links is the future of secure and seamless user authentication.",
        fullDescription:
            "Magic link authentication eliminates the need for passwords by sending a one-time login link via email, enhancing security and improving user experience.",
        date: "May 30, 2025",
    },
    {
        id: 4,
        title: "Resume Templates That Work in 2025",
        excerpt:
            "Explore the most effective resume templates for modern job seekers in today’s market.",
        fullDescription:
            "Modern resume templates prioritize clarity, ATS compatibility, and highlight your key achievements with clean layouts, helping recruiters focus on what matters.",
        date: "April 10, 2025",
    },
    {
        id: 5,
        title: "How Supabase Simplifies Cloud Saving",
        excerpt:
            "A deep dive into Supabase and how it can help you securely store your resumes and data.",
        fullDescription:
            "Supabase offers an easy-to-use, scalable backend with authentication and real-time database services that integrate seamlessly into modern web apps.",
        date: "March 5, 2025",
    },
    {
        id: 6,
        title: "Crafting the Perfect Cover Letter",
        excerpt:
            "Tips and tricks to write a compelling cover letter that complements your resume.",
        fullDescription:
            "A great cover letter tells your story, highlights key skills, and demonstrates why you're a perfect fit, boosting your chances of landing interviews.",
        date: "February 12, 2025",
    },
    {
        id: 7,
        title: "The Importance of Soft Skills in Your Resume",
        excerpt:
            "Why soft skills are becoming essential in hiring decisions.",
        fullDescription:
            "Soft skills like communication, teamwork, and adaptability are often decisive for employers and should be showcased effectively on your resume.",
        date: "January 28, 2025",
    },
    {
        id: 8,
        title: "Using n8n to Automate Your Job Applications",
        excerpt:
            "How workflow automation tools can save you time applying for multiple jobs.",
        fullDescription:
            "n8n allows you to automate repetitive tasks like submitting resumes, tracking job statuses, and sending follow-up emails, streamlining your job hunt.",
        date: "January 10, 2025",
    },
    {
        id: 9,
        title: "Remote Work: Tailoring Your Resume for Virtual Jobs",
        excerpt:
            "Highlighting skills and experience relevant to remote positions.",
        fullDescription:
            "Emphasize self-motivation, communication tools proficiency, and remote collaboration experience to catch recruiters’ eyes for virtual roles.",
        date: "December 15, 2024",
    },
    {
        id: 10,
        title: "Understanding Applicant Tracking Systems (ATS)",
        excerpt:
            "A beginner's guide to how ATS works and how to optimize for it.",
        fullDescription:
            "ATS parse resumes to filter out candidates. Using the right keywords, simple formatting, and clear sections can improve your resume’s chances.",
        date: "November 20, 2024",
    },
    {
        id: 11,
        title: "Effective Resume Action Verbs You Should Use",
        excerpt:
            "Power up your resume with dynamic action verbs.",
        fullDescription:
            "Action verbs like 'managed,' 'developed,' and 'led' make your achievements sound strong and measurable.",
        date: "October 5, 2024",
    },
    {
        id: 12,
        title: "What Recruiters Look For in 2025",
        excerpt:
            "Insights from hiring managers on resume preferences.",
        fullDescription:
            "Recruiters want concise, relevant resumes that highlight impact and cultural fit. Tailoring resumes per job is key.",
        date: "September 12, 2024",
    },
];

export default function BlogPage() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (

        <div>
            <main className="max-w-6xl mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold text-center mb-10 text-primary">
                    Latest Blog Posts
                </h1>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map(({ id, title, excerpt, fullDescription, date }) => (
                        <article
                            key={id}
                            className="bg-base-100 p-6 rounded-lg shadow hover:shadow-lg cursor-pointer transition-shadow duration-300"
                            onClick={() => toggleExpand(id)}
                        >
                            <h2 className="text-xl font-semibold mb-2 text-secondary">{title}</h2>
                            <p className="text-sm text-base-content/80 mb-4">
                                {expandedId === id ? fullDescription : excerpt}
                            </p>
                            <time className="text-xs text-base-content/60">{date}</time>
                            <p className="mt-2 text-primary font-medium text-sm select-none">
                                {expandedId === id ? "Show Less ▲" : "Read More ▼"}
                            </p>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}
