'"use client";'
import React from "react";
import Link from "next/link";

export default function AboutUs() {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">

                    <a className="btn btn-ghost text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2v6h6M8 13h8M8 17h8M8 9h4" />
                    </svg>
                        <span className="text-blue-600 text-3xl mb-1">AH</span><span className="mt-2  text-yellow-500" >resumeTrailer</span></a>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href='/'>Home</Link></li>
                        <li>

                            <Link href="/features">Features</Link>
                        </li>
                        <li><Link href='/blogs'>Blog</Link></li>
                        <li><Link href="/aboutus">About Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end m-2 gap-2">


                    <Link href="/" className=" text-blue-700">Sign in</Link>
                    <Link href="/" className="bg-blue-700 text-white h-10 p-2 rounded">Create my Resume</Link>
                </div>
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="synthwave" />

                    {/* sun icon */}
                    <svg
                        className="swap-off h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                        className="swap-on h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>

            </div>
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

            <footer className="bg-base-300 text-base-content px-6 py-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    {/* Services */}
                    <div>
                        <h6 className="footer-title mb-2">Services</h6>
                        <Link href="/resume-builder" className="link link-hover block">Resume Builder</Link>
                        <Link href="/cover-letters" className="link link-hover block">Cover Letters</Link>
                        <Link href="/templates" className="link link-hover block">Templates</Link>
                        <Link href="/job-tracker" className="link link-hover block">Job Tracker</Link>
                    </div>

                    {/* Company */}
                    <div>
                        <h6 className="footer-title mb-2">Company</h6>
                        <Link href="/about" className="link link-hover block">About Us</Link>
                        <Link href="/careers" className="link link-hover block">Careers</Link>
                        <Link href="/contact" className="link link-hover block">Contact</Link>
                        <Link href="/blog" className="link link-hover block">Blog</Link>
                    </div>

                    {/* Legal */}
                    <div>
                        <h6 className="footer-title mb-2">Legal</h6>
                        <Link href="/terms" className="link link-hover block">Terms of Use</Link>
                        <Link href="/privacy" className="link link-hover block">Privacy Policy</Link>
                        <Link href="/cookies" className="link link-hover block">Cookie Policy</Link>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h6 className="footer-title mb-2">Follow Us</h6>
                        <div className="flex gap-4 mt-2">
                            {/* GitHub */}
                            <a
                                href="https://github.com/ayaz7964"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <svg
                                    className="w-5 h-5 fill-current hover:text-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 0C5.37 0 0 5.373 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.585 0-.287-.012-1.243-.017-2.253-3.338.724-4.042-1.614-4.042-1.614-.547-1.388-1.336-1.758-1.336-1.758-1.093-.747.083-.732.083-.732 1.205.085 1.838 1.238 1.838 1.238 1.073 1.836 2.815 1.305 3.504.998.108-.777.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.934 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.823 1.096.823 2.21 0 1.596-.015 2.884-.015 3.276 0 .325.19.703.8.584C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
                                    />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/ayaz-hussain-cs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <svg
                                    className="w-5 h-5 fill-current hover:text-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4v15h-4v-15zm7.5 0h3.6v2.03h.05c.5-.94 1.72-1.93 3.55-1.93 3.8 0 4.5 2.5 4.5 5.75v6.15h-4v-5.44c0-1.3-.03-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.88v5.54h-4v-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider my-6"></div>

                {/* Bottom Bar */}
                <div className="text-center text-sm text-gray-500">
                    © 2025 ResumeTrailer. All rights reserved. | Built by <span className="text-primary font-medium">Ayaz Hussain</span>
                </div>
            </div>
        </footer>
        </div>
    );
}
