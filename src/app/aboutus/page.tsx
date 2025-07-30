'"use client";'
import React from "react";
import Link from "next/link";

export default function AboutUs() {
    return (
        <div>

            <main className="max-w-5xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-center mb-10 text-primary">
                    About AH ResumeTailor
                </h1>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-secondary">Our Mission</h2>
                    <p className="text-base text-base-content/90 leading-relaxed">
                        At <span className="font-semibold">AH ResumeTailor</span>, our mission is to empower job seekers with intelligent, AI-driven tools that craft personalized, professional resumes in minutes. We leverage modern technology and thoughtful design to help users make lasting impressions in a competitive job market.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-secondary">Our Vision</h2>
                    <p className="text-base text-base-content/90 leading-relaxed">
                        We envision a world where access to high-quality resume-building tools is universal—regardless of background, experience, or geography. By integrating artificial intelligence, automation, and seamless user flows,AH ResumeTailor redefines how individuals navigate the job application process.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-secondary">Technology Stack</h2>
                    <ul className="list-disc list-inside text-base text-base-content/90 space-y-2">
                        <li>AI-powered resume tailoring with keyword optimization</li>
                        <li>Passwordless authentication via magic links</li>
                        <li>Scalable data management using Supabase and MongoDB</li>
                        <li>Workflow automation with n8n</li>
                        <li>Continuous deployment and hosting via Vercel</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-8 text-secondary text-center">
                        Meet the Developer
                    </h2>

                    <div className="flex justify-center  ">
                        <div className="text-center p-6 bg-base-100 rounded-lg shadow-md max-w-full">
                            <img
                                src="/ayazhussain.png"
                                alt="Ayaz Hussain"
                                className="mx-auto mb-4 w-28 h-28 rounded-full object-cover"
                            />
                            <h3 className="text-xl font-semibold mb-1">Ayaz Hussain</h3>
                            <p className="text-sm text-base-content/70 mb-3">
                                Founder & Lead Developer
                            </p>
                            <p className="text-base text-base-content/80 mb-4 leading-relaxed">
                                Ayaz Hussain is a passionate software engineer dedicated to building accessible, AI-driven products that simplify career development. With a strong background in full-stack development and user experience,  he leads AH ResumeTailor&apos;s product vision  and execution.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href="https://www.linkedin.com/in/ayaz-hussain-cs/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800"
                                    aria-label="LinkedIn"
                                >
                                    {/* LinkedIn Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6"
                                    >
                                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1 4.98 2.12 4.98 3.5zM.02 7.5h5v14h-5v-14zm6 0h4.79v1.88h.07c.67-1.27 2.3-2.6 4.74-2.6 5.08 0 6.02 3.33 6.02 7.67v8.05h-5v-7.13c0-1.7-.03-3.9-2.38-3.9-2.39 0-2.75 1.86-2.75 3.78v7.25h-5v-14z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://github.com/ayaz7964"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-800 hover:text-gray-900"
                                    aria-label="GitHub"
                                >
                                    {/* GitHub Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6"
                                    >
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.39-1.333-1.758-1.333-1.758-1.09-.745.082-.73.082-.73 1.205.086 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.996.11-.776.42-1.305.763-1.606-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.125-.303-.536-1.524.115-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.81 1.102.81 2.222v3.293c0 .32.21.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    );
}
