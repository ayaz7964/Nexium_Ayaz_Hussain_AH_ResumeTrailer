import Link from "next/link";
export default function Footer() {
    return (
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
    );
}