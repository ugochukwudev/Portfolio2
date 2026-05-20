'use client';

import Link from 'next/link';

export default function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ikegbulam Ugochukwu Paul.pdf';
    link.download = 'Ikegbulam-Ugochukwu-Paul-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <div className="container-custom py-10">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
          >
            ← Back to portfolio
          </Link>
          <button
            onClick={handleDownload}
            className="text-sm px-4 py-2 rounded-md font-medium text-[var(--bg)] transition-colors"
            style={{ background: 'var(--accent)' }}
          >
            Download PDF
          </button>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[var(--text)]">Ikegbulam Ugochukwu Paul</h1>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            Fullstack Developer · Software Engineer · Technical Writer · Community Leader
          </p>
        </div>

        <hr className="section-divider mb-6" />

        {/* PDF embed */}
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: '1px solid var(--border)' }}
        >
          <iframe
            src="/Ikegbulam Ugochukwu Paul.pdf"
            className="w-full"
            style={{ height: '85vh', border: 'none' }}
            title="Ikegbulam Ugochukwu Paul — Resume"
          />
        </div>

        <p className="text-xs text-[var(--text-muted)] text-center mt-6">
          &copy; {new Date().getFullYear()} Ikegbulam Ugochukwu Paul
        </p>
      </div>
    </div>
  );
}
