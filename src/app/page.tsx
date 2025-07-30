import Image from "next/image";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";

export default function Home() {
  return (
    <div>

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


    </div>
  );
}
