import Image from "next/image";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";

export default function Home() {
  return (
 <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">

          <Link  href='/' className="btn btn-ghost text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2v6h6M8 13h8M8 17h8M8 9h4" />
          </svg>
            <span className="text-blue-600 text-3xl mb-1">AH</span><span className="mt-2  text-yellow-500" >resumeTrailer</span></Link>
            
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li>
             
              <Link href="/features">Features</Link>
            </li>
            <li><Link href="/blogs">Blog</Link></li>
            <li><Link href="/aboutus">About Us</Link></li>
          </ul>
        </div>
        <div className="navbar-end m-2 gap-2">
          <Link href="/login" className=" text-blue-700">Sign in</Link>
          <Link href="/login" className="bg-blue-700 text-white h-10 p-2 rounded">Create my Resume</Link>

         
          



          
        </div>
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className= "theme-controller" value="synthwave" />

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

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/banner.png"
            className="max-w-150 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-7xl font-bold">This resume builder gets you</h1>
            <h1 className="text-7xl font-bold"> <AnimatedText /></h1>
            <p className="py-2">
              Only 2% of resumes win. Yours will be one of them.
            </p>
            <Link href="/login" className="bg-blue-400 text-white h-10 p-2  rounded">Create my Resume</Link>
            <Link href="/login" className="bg-blue-100 text-blue-700 h-10 p-2 mx-2 rounded">Upload my Resume</Link>
            <p className="my-2"> ✔️ 39% more likely to land the job</p>
            <p className="my-2">  <span className="text-green-500 text-xl mr-2">★</span>
              Trustpilot 4.4 out of 5 | 37,389 reviews</p>

          </div>
        </div>
      </div>
      <div className="text-center my-10">
        <h2 className="text-4xl font-bold mb-4">Get hired fast with a powerful resume</h2>

      </div>

      <div className="flex flex-wrap justify-center  gap-6 m-4">

        {[
          {
            icon: "/card1.png",
            title: "A better resume in minutes",
            desc: "Replace your old resume in a few simple clicks. Our builder gives recruiters what they want.",
          },
          {
            icon: "/card2.png",
            title: "ATS-friendly templates",
            desc: "Tick every box and make sure your resume is never filtered out by the hiring software.",
          },
          {
            icon: "/card3.png",
            title: "Pre-written content",
            desc: "Stop worrying about words. Save time by adding pre-approved, tested content from certified writers.",
          },
          {
            icon: "/card4.png",
            title: "Easy with AI",
            desc: "Quickly generate formal phrases and summaries. Sound professional, faster.",
          },
          {
            icon: "/card5.png",
            title: "Beat the competition",
            desc: "Our tested resume templates are designed to make you more attractive to recruiters.",
          },
          {
            icon: "/card6.png",
            title: "Get paid more",
            desc: "A higher salary begins with a strong resume. Our salary analyzer helps you understand your worth.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="card card-side bg-base-100 shadow-sm max-w-150"
          >
            <figure>
              <img
                src={item.icon}
                alt="Movie"
                className="w-30 h-30 p-4 rounded-lg "
              />

            </figure>
            <div className="card-body max-w-90">
              <h2 className="card-title text-blue-600">{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="card bg-base-100 max-w-full shadow-sm p-4 m-4">

        <div className="card-body items-center  text-center">
          <h2 className="card-title w-1/2 text-blue-600 text-7xl font-bold ">Join over 52,794,000 users worldwide</h2>
          <p>Start for free — try our resume builder now</p>
          <div className="card-actions">
            <Link href="/login" className="btn btn-primary rounded">Create my Resume</Link>
            <Link href="/login" className="btn bg-blue-500 rounded text-white">Upload my Resume</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto p-4">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold text-blue-500">What is defination of resume?</div>
          <div className="collapse-content text-sm">A resume is a concise document that summarizes your work experience,
            education, skills, qualities, and accomplishments. It’s used to showcase your qualifications
            to potential employers and helps you stand out. It tells employers why you deserve
            a job interview in one or two powerful pages.</div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-blue-500">What is different between a CV and a Resume?</div>
          <div className="collapse-content text-sm">In the U.S. and elsewhere around the world, the terms &quot;CV&quot; and &quot;resume&quot;
            are often used in the same way. However, there are some differences.
            A resume is typically shorter, highlighting relevant skills and experience for a specific job.
            A CV (curriculum vitae) is more detailed, focusing on your entire career. For most U.S.
            job applications, a resume is the preferred format.</div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-blue-500">How do I choose the right resume template? </div>
          <div className="collapse-content text-sm">To choose the right resume template, consider the job you&apos;re applying for and your industry. If you&apos;re in a creative field, a more visually appealing template might be best. For traditional industries like finance or law, stick to a clean, professional layout. Ensure the template is easy to read, highlights your strengths, and aligns with your experience level. Avoid overloading it with too many graphics or colors that could distract from your qualifications. Choosing the best resume format for the template is also important: Chronological (or reverse chronological) - Most popular: Lists jobs in reverse order, starting with the most recent. Ideal for those with a consistent career track. Functional (skills-based): Highlights skills over chronological work history, perfect for career changers or those with employment gaps. Combination (hybrid): Merges elements of both chronological and functional formats, listing skills followed by employment history. Great for experienced professionals with varied transferable skills relevant to the job. Review our field-tested resume templates or job-specific resume examples to help pick the ideal template for you or change your template on the fly in the builder.</div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-blue-500">How far back should a resume go? </div>
          <div className="collapse-content text-sm">A resume should typically go back 10-15 years, focusing on the most recent and relevant experience, and not necessarily all your previous jobs. Older jobs may be summarized briefly or left out if they aren&apos;t relevant to the position you&apos;re applying for. The goal is to highlight your most valuable skills and accomplishments without overwhelming the reader by making your resume too long.</div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-blue-500">Should I make a different resume for every job application? </div>
          <div className="collapse-content text-sm">Yes, it&apos;s essential to tailor your resume for every job application. Tailored resumes are directly relevant to the job description. This impresses recruiters. Customize your resume by highlighting the skills, experiences, and accomplishments most relevant to the specific job. This increases your chances of standing out and showing employers you&apos;re a great fit for their position. However, you don&apos;t need to start from scratch; just tweak key sections to match the job description. With our resume builder, you can easily duplicate existing resumes, paste the new job listing link, and receive tailored advice to help you update your resume to match the specific job requirements.</div>
        </div>
      </div>
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
