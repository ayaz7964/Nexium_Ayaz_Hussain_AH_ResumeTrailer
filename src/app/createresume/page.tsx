'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useForm, useFieldArray, FormProvider, useFormContext } from 'react-hook-form';
import Link from 'next/link'
import { useReactToPrint } from 'react-to-print';
import { supabase } from '@/app/lib/supabaseClient';
import { useRouter } from 'next/navigation';

type ResumeData = {
  profileImage?: FileList;
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  employmentHistory: { company: string; role: string; duration: string; description: string }[];
  education: { education: string; institution: string; graduationYear: string }[];
  skills: string[];
  languages: string[];
  certifications: string[];
  hobbies: string[];
  experienceSummary: string;
};

const steps = ['Personal Details', 'Employment History', 'Education', 'Experience', 'Preview'];

export default function ResumeBuilder() {
  const methods = useForm<ResumeData>({
    defaultValues: {
      employmentHistory: [{ company: '', role: '', duration: '', description: '' }],
      education: [{ education: '', institution: '', graduationYear: '' }],
      skills: [],
      languages: [],
      certifications: [],
      hobbies: [],
    },
  });

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const onNext = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const onPrev = () => setStep((prev) => Math.max(prev - 1, 0));

  const onSubmit = (data: ResumeData) => {
    setSubmitted(true);
    setStep(4); // Go to Preview
  };

  const handlePrint = useReactToPrint({
    contentRef: previewRef,
    documentTitle: 'My_Resume',
  });

  const router = useRouter();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut({ scope: 'global' }); // ✅ Logout everywhere
    if (!error) {
      router.push('/login');
    } else {
      console.error('Logout error:', error.message);
    }
  };
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
          {/* <ul className="menu menu-horizontal px-1">
                        <li><a href='/'>Home</a></li>
                        <li>

                            <Link href="/features">Features</Link>
                        </li>
                        <li><Link href='/blogs'>Blog</Link></li>
                        <li><a href="/aboutus">About Us</a></li>
                    </ul> */}
          <Link href="/createresume" className=" text-blue-700 h-10 p-2 rounded">Create my Resume</Link>
          <Link href="/uploade" className=" text-blue-700 h-10 p-2 rounded">Trailer my Resume</Link>
        </div>
        <div className="navbar-end m-2 gap-2">


          <Link href="" className=" text-blue-700" onClick={handleLogout}>Sign Out  </Link>
          {/* <Link href="/" className="bg-blue-700 text-white h-10 p-2 rounded">Create my Resume</Link> */}
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

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col lg:flex-row p-6 gap-8 bg-base-200 min-h-screen">
          <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg space-y-6">
            <h2 className="text-3xl font-bold">{steps[step]}</h2>

            {step === 0 && <PersonalDetails />}
            {step === 1 && <EmploymentHistory />}
            {step === 2 && <Education />}
            {step === 3 && <Experience />}

            {step === 4 && (
              <div className="space-y-4">
                <button type="submit" disabled={submitted} className="btn btn-success w-full">
                  Submit & Generate Resume
                </button>
                {submitted && (
                  <button type="button" className="btn btn-outline w-full" onClick={handlePrint}>
                    Download as PDF
                  </button>
                )}
              </div>
            )}

            <div className="flex justify-between pt-6">
              {step > 0 && (
                <button type="button" className="btn btn-secondary" onClick={onPrev}>
                  Back
                </button>
              )}
              {step < steps.length - 1 && (
                <button type="button" className="btn btn-primary" onClick={onNext}>
                  Next
                </button>
              )}
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
            <div ref={previewRef}>
              <ResumePreview data={methods.watch()} submitted={submitted} />
            </div>
          </div>
        </form>
      </FormProvider>


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

function FormField({
  label,
  name,
  placeholder,
  type = 'text',
}: {
  label: string;
  name: any;
  placeholder: string;
  type?: string;
}) {
  const { register } = useFormContext<ResumeData>();
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text font-semibold">{label}</span>
      </label>
      <input {...register(name)} type={type} placeholder={placeholder} className="input input-bordered w-full" />
    </div>
  );
}

function PersonalDetails() {
  const { register, watch } = useFormContext<ResumeData>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const file = watch('profileImage');
  useEffect(() => {
    if (file?.length) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file[0]);
    } else {
      setImagePreview(null);
    }
  }, [file]);

  return (
    <div className="space-y-6">
      <div>
        <label className="block mb-2 font-semibold">Profile Image</label>
        <input type="file" {...register('profileImage')} accept="image/*" className="file-input file-input-bordered w-full max-w-xs" />
        {imagePreview && <img src={imagePreview} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded-full border" />}
      </div>
      <FormField label="Job Title" name="jobTitle" placeholder="e.g. Software Engineer" />
      <div className="flex gap-4">
        <FormField label="First Name" name="firstName" placeholder="John" />
        <FormField label="Last Name" name="lastName" placeholder="Doe" />
      </div>
      <div className="flex gap-4">
        <FormField label="Email" name="email" placeholder="john@example.com" type="email" />
        <FormField label="Phone" name="phone" placeholder="+123456789" />
      </div>
      <FormField label="Address" name="address" placeholder="123 Main St" />
      <div className="flex gap-4">
        <FormField label="City" name="city" placeholder="New York" />
        <FormField label="Country" name="country" placeholder="USA" />
      </div>
    </div>
  );
}

function EmploymentHistory() {
  const { register, control } = useFormContext<ResumeData>();
  const { fields, append, remove } = useFieldArray({ control, name: 'employmentHistory' });

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2 border p-4 rounded-md">
          <input {...register(`employmentHistory.${index}.company`)} className="input input-bordered w-full" placeholder="Company" />
          <input {...register(`employmentHistory.${index}.role`)} className="input input-bordered w-full" placeholder="Role" />
          <input {...register(`employmentHistory.${index}.duration`)} className="input input-bordered w-full" placeholder="Duration" />
          <textarea {...register(`employmentHistory.${index}.description`)} className="textarea textarea-bordered w-full" placeholder="Description / Achievements" />
          <button type="button" className="btn btn-sm btn-error" onClick={() => remove(index)}>Remove</button>
        </div>
      ))}
      <button type="button" className="btn btn-sm btn-accent" onClick={() => append({ company: '', role: '', duration: '', description: '' })}>
        + Add Experience
      </button>
    </div>
  );
}

function Education() {
  const { register, control } = useFormContext<ResumeData>();
  const { fields, append, remove } = useFieldArray({ control, name: 'education' });

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2 border p-4 rounded-md">
          <input {...register(`education.${index}.education`)} className="input input-bordered w-full" placeholder="Degree / Education" />
          <input {...register(`education.${index}.institution`)} className="input input-bordered w-full" placeholder="Institution" />
          <input {...register(`education.${index}.graduationYear`)} className="input input-bordered w-full" placeholder="Graduation Year" />
          <button type="button" className="btn btn-sm btn-error" onClick={() => remove(index)}>Remove</button>
        </div>
      ))}
      <button type="button" className="btn btn-sm btn-accent" onClick={() => append({ education: '', institution: '', graduationYear: '' })}>
        + Add Education
      </button>
    </div>
  );
}

function Experience() {
  const { register, control } = useFormContext<ResumeData>();
  const { fields: skillFields, append: addSkill, remove: removeSkill } = useFieldArray({ control, name: 'skills' });
  const { fields: langFields, append: addLang, remove: removeLang } = useFieldArray({ control, name: 'languages' });
  const { fields: certFields, append: addCert, remove: removeCert } = useFieldArray({ control, name: 'certifications' });
  const { fields: hobbyFields, append: addHobby, remove: removeHobby } = useFieldArray({ control, name: 'hobbies' });

  return (
    <div className="space-y-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Experience Summary</span>
        </label>
        <br />
        <textarea {...register('experienceSummary')} className="textarea textarea-bordered h-40" placeholder="Summarize your experience..." />
      </div>

      <div>
        <h3 className="font-semibold mb-2">Skills</h3>
        {skillFields.map((field, i) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <input {...register(`skills.${i}`)} className="input input-bordered w-full" placeholder="e.g. React, Python" />
            <button type="button" onClick={() => removeSkill(i)} className="btn btn-sm btn-error">X</button>
          </div>
        ))}
        <button type="button" onClick={() => addSkill('')} className="btn btn-sm btn-accent">+ Add Skill</button>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Languages</h3>
        {langFields.map((field, i) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <input {...register(`languages.${i}`)} className="input input-bordered w-full" placeholder="e.g. English" />
            <button type="button" onClick={() => removeLang(i)} className="btn btn-sm btn-error">X</button>
          </div>
        ))}
        <button type="button" onClick={() => addLang('')} className="btn btn-sm btn-accent">+ Add Language</button>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Certifications</h3>
        {certFields.map((field, i) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <input {...register(`certifications.${i}`)} className="input input-bordered w-full" placeholder="e.g. AWS Certified Developer" />
            <button type="button" onClick={() => removeCert(i)} className="btn btn-sm btn-error">X</button>
          </div>
        ))}
        <button type="button" onClick={() => addCert('')} className="btn btn-sm btn-accent">+ Add Certification</button>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Hobbies / Interests</h3>
        {hobbyFields.map((field, i) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <input {...register(`hobbies.${i}`)} className="input input-bordered w-full" placeholder="e.g. Reading, Hiking" />
            <button type="button" onClick={() => removeHobby(i)} className="btn btn-sm btn-error">X</button>
          </div>
        ))}
        <button type="button" onClick={() => addHobby('')} className="btn btn-sm btn-accent">+ Add Hobby</button>
      </div>
    </div>
  );
}

function ResumePreview({ data, submitted }: { data: Partial<ResumeData>; submitted: boolean }) {
  if (!submitted) return <div className="text-gray-400 italic text-center mt-24">Fill the form and submit to preview your resume...</div>;

  return (
    <div className="font-sans text-black bg-white p-6 w-full">
      <div className="flex gap-6">
        <div className="w-1/3 bg-base-200 rounded-lg p-4 text-sm">
          {data.profileImage?.length ? (
            <img src={URL.createObjectURL(data.profileImage[0])} alt="Profile" className="w-32 h-32 rounded-full object-cover mb-4 mx-auto" />
          ) : null}
          <h3 className="font-bold mb-2">CONTACT</h3>
          <p>{data.phone}</p>
          <p>{data.email}</p>
          <p>{data.address}, {data.city}, {data.country}</p>

          <h3 className="font-bold mt-4 mb-2">SKILLS</h3>
          <ul className="list-disc ml-4">{data.skills?.map((s, i) => <li key={i}>{s}</li>)}</ul>

          <h3 className="font-bold mt-4 mb-2">LANGUAGES</h3>
          <ul className="list-disc ml-4">{data.languages?.map((l, i) => <li key={i}>{l}</li>)}</ul>

          <h3 className="font-bold mt-4 mb-2">CERTIFICATIONS</h3>
          <ul className="list-disc ml-4">{data.certifications?.map((c, i) => <li key={i}>{c}</li>)}</ul>

          <h3 className="font-bold mt-4 mb-2">HOBBIES</h3>
          <ul className="list-disc ml-4">{data.hobbies?.map((h, i) => <li key={i}>{h}</li>)}</ul>
        </div>

        <div className="w-2/3">
          <h1 className="text-4xl font-bold">{data.firstName} {data.lastName}</h1>
          <p className="text-md font-semibold text-gray-700">{data.jobTitle}</p>

          <div className="mt-6">
            <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-2">PROFILE</h2>
            <p className="text-sm">{data.experienceSummary}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-2">WORK EXPERIENCE</h2>
            {data.employmentHistory?.map((exp, i) => (
              <div key={i} className="mb-3">
                <p className="font-semibold">{exp.role} <span className="text-sm font-normal">at {exp.company}</span></p>
                <p className="text-sm text-gray-600">{exp.duration}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-2">EDUCATION</h2>
            {data.education?.map((edu, i) => (
              <div key={i} className="mb-3">
                <p className="font-semibold">{edu.education}</p>
                <p className="text-sm">{edu.institution} ({edu.graduationYear})</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}





