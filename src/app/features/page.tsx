// pages/features.tsx
import Link from 'next/link';
import { LiaJenkins } from 'react-icons/lia';
export default function FeaturesPage() {

    const features = [
        {
            title: 'AI Resume Tailoring',
            description: 'Automatically optimize your resume for each job using AI prompts and job descriptions.',
        },
        {
            title: 'Job Keyword Matching',
            description: 'Boost ATS score by aligning your resume with keywords from the job listing.',
        },
        {
            title: 'One-Click Template Switching',
            description: 'Instantly change your resume layout without losing formatting.',
        },
        {
            title: 'Magic Link Login',
            description: 'Secure and passwordless login experience via your email.',
        },
        {
            title: 'Cover Letter Generator',
            description: 'Craft tailored cover letters instantly based on your resume and job title.',
        },
        {
            title: 'Real-Time PDF Export',
            description: 'Download beautiful, ATS-friendly resumes with a single click.',
        },
        {
            title: 'Version History',
            description: 'Access and restore previous resume versions anytime.',
        },
        {
            title: 'Section Reordering',
            description: 'Drag and drop resume sections to customize your structure.',
        },
        {
            title: 'Grammar & Clarity Check',
            description: 'Get instant feedback on tone, grammar, and clarity from AI.',
        },
        {
            title: 'Mobile-Friendly Editing',
            description: 'Edit your resume on the go with our responsive editor.',
        },
        {
            title: 'Cloud Saving with Supabase',
            description: 'Your resumes are autosaved securely to the cloud with Supabase.',
        },
    ];

    return (
        <main >

            <main className="max-w-5xl mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold text-center text-primary mb-8">
                    Features That Make Your Resume Stand Out
                </h1>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="card bg-base-100 shadow hover:shadow-lg transition-all border border-base-200"
                        >
                            <div className="card-body">
                                <h2 className="card-title text-lg">{feature.title}</h2>
                                <p className="text-sm text-base-content/80">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </main>
    );
}
