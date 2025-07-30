'use client';

import dynamic from 'next/dynamic';

const PdfUploader = dynamic(() => import('@/app/components/PdfUploader'), { ssr: false });

export default function UploadPage() {
  return <PdfUploader />;
}
