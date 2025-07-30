'use client';

import React, { useRef, useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.mjs'; // Important to bundle the worker
import Link from 'next/link';
import { supabase } from '@/app/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import type { TextItem } from 'pdfjs-dist/types/src/display/api';

// Configure worker
GlobalWorkerOptions.workerSrc = `/pdf.worker.mjs`; // This path is important

const PdfUploader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');
  const [isUploaded, setIsUploaded] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type === 'application/pdf') {
      setFile(selected);
      resetUpload();
      extractTextFromPDF(selected);
    } else {
      setError('Only PDF files are allowed.');
    }
  };


  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut({ scope: 'global' }); // ✅ Logout everywhere
    if (!error) {
      router.push('/login');
    } else {
      console.error('Logout error:', error.message);
    }
  };


  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    if (dropped && dropped.type === 'application/pdf') {
      setFile(dropped);
      resetUpload();
      extractTextFromPDF(dropped);
    } else {
      setError('Only PDF files are allowed.');
    }
    setIsDragging(false);
  };

  const resetUpload = () => {
    setIsUploaded(false);
    setError('');
    setAiResponse('');
    setResumeText('');
  };

  const extractTextFromPDF = async (pdfFile: File) => {
    try {
      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdf = await getDocument({ data: arrayBuffer }).promise;
      let text = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        // const pageText = content.items.map((item: any) => item.str).join(' ');
        const pageText = content.items
          .map((item) => (item as TextItem).str)
          .join(' ');
        text += pageText + '\n';
      }
      setResumeText(text.trim());
    } catch (err) {
      console.error('Error extracting PDF text:', err);
      setError('Failed to read the PDF content.');
    }
  };

  const handleUpload = async () => {
    if (!resumeText) {
      setError('Resume text not available.');
      return;
    }

    if (!jobDescription.trim()) {
      setError('Please enter a job description.');
      return;
    }

    setError('');
    setIsUploaded(false);
    setLoading(true);

    try {
      const response = await fetch('/api/tailor-resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeText, jobDescription }),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error || 'Unknown server error.');
      }

      const data = await response.json();
      setAiResponse(data?.result || 'No response from OpenAI.');
      setIsUploaded(true);
    }
    catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err);
        setError(err.message || 'Failed to fetch tailored resume.');
      } else {
        console.error('Unexpected error:', err);
        setError('An unexpected error occurred.');
      }
    }
  }

  const removeFile = () => {
    setFile(null);
    resetUpload();
  };

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
      <div className="flex items-start justify-center  bg-gray-100 p-8">
        <div className="w-1/2  bg-white rounded-[40px] shadow-xl p-6 mx-4">
          <div
            className={`w-full p-8 text-center border-2 border-dashed rounded-[40px] cursor-pointer transition-all ${isDragging ? 'border-green-500 bg-green-50' : 'border-purple-800'
              }`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <span className="material-icons-outlined text-5xl text-purple-800">
              {file ? 'check_circle' : isDragging ? 'file_download' : 'file_upload'}
            </span>
            <h3 className="text-2xl my-3">
              {file ? 'PDF Selected!' : isDragging ? 'Drop your PDF here!' : 'Drag & drop your PDF'}
            </h3>
            <label className="text-lg">
              or{' '}
              <span className="text-purple-800 font-bold underline cursor-pointer">
                browse
                <input
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                />
              </span>{' '}
              from device
            </label>
          </div>

          {error && (
            <div className="text-red-700 bg-red-100 mt-3 px-4 py-2 rounded-lg text-sm">
              <span className="material-icons-outlined mr-2">error</span>
              {error}
              <span className="material-icons-outlined ml-auto cursor-pointer float-right" onClick={() => setError('')}>
                cancel
              </span>
            </div>
          )}

          {file && (
            <div className="bg-purple-800 text-white w-full flex items-center justify-between mt-4 px-4 py-3 rounded-2xl">
              <div className="flex items-center text-sm">
                <span className="material-icons-outlined mr-2">description</span>
                <span>{file.name}</span>
                <span className="mx-2">|</span>
                <span>{(file.size / 1024).toFixed(1)} KB</span>
              </div>
              <span className="material-icons cursor-pointer" onClick={removeFile}>
                delete
              </span>
            </div>
          )}

          <label htmlFor="jobdescription" className="font-bold text-center mt-6 text-2xl block">
            Job Description
          </label>
          <textarea
            name="jobdescription"
            className="border-solid border-2 rounded-[10px] w-full p-3 mt-2 text-gray-800"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows={5}
          />

          <button
            onClick={handleUpload}
            disabled={loading}
            className="mt-6 ml-50 px-12 py-2 rounded-2xl bg-purple-800 text-white font-medium flex items-center gap-2"
          >
            {loading ? 'Processing...' : isUploaded ? (
              <>
                <span className="material-icons-outlined">check_circle</span>
                Tailored
              </>
            ) : (
              'Tailor Resume with AI'
            )}
          </button>
        </div>

        <div className="w-1/2 bg-white rounded-[40px]  shadow-xl p-6 mx-4 overflow-auto">
          <h2 className="text-2xl font-bold mb-4">AI-Tailored Resume</h2>
          {aiResponse ? (
            <>
              <div id="resume-preview" className="whitespace-pre-wrap text-sm text-gray-700 bg-gray-50 p-4 rounded-lg border">
                {aiResponse}
              </div>
              {/* <button onClick={downloadPdf} className="mt-4 px-6 py-2 bg-purple-800 text-white rounded-xl">
                Download PDF
              </button> */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(aiResponse)
                  alert('Copied to clipboard!');
                }}
                className="mt-4 ml-4 px-6 py-2 bg-green-600 text-white rounded-xl"
              >
                Copy to Clipboard
              </button>
              <p>Kindly copy the sample resume and use it as a reference to create a new resume </p>
            </>
          ) : (
            <p className="text-gray-500">Your tailored resume will appear here after processing.</p>
          )}
        </div>
      </div>


     
    </div>
  );
};

export default PdfUploader;
