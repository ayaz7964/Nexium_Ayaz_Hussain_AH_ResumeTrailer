
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const templates = [
  {
    id: 'classic',
    name: 'Classic',
    image: '/template1.png',
    description: 'Simple and clean layout for traditional industries.',
  },
  {
    id: 'modern',
    name: 'Modern',
    image: '/templates/modern-preview.png',
    description: 'Bold headings and neat structure for tech or design.',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    image: '/templates/minimal-preview.png',
    description: 'Whitespace-heavy and readable. Great for professionals.',
  },
];

export default function TemplatesPage() {
  const router = useRouter();

  const handleSelectTemplate = (id: string) => {
    // Store selection to localStorage or URL param
    localStorage.setItem('selectedTemplate', id);
    router.push('/builder'); // Or wherever your resume builder is
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Choose a Template</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <div key={template.id} className="border rounded-xl w-60 shadow-md hover:shadow-xl transition overflow-hidden bg-white">
            <img src={template.image} alt={template.name} className="h-90  object-cover" />
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{template.name}</h2>
              <p className="text-sm text-gray-600">{template.description}</p>
              <button
                className="btn btn-primary w-full mt-2"
                onClick={() => handleSelectTemplate(template.id)}
              >
                Use this Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
