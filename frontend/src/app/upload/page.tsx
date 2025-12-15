"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    // Simulate upload process (backend not implemented yet)
    setTimeout(() => {
      setIsUploading(false);
      router.push("/results");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">OpenATS</h1>
            </Link>
            <div className="flex items-center gap-4">
              <Link 
                href="/upload" 
                className="text-blue-600 font-semibold"
              >
                Upload Resume
              </Link>
              <Link 
                href="/#features" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </Link>
              <Link 
                href="/#about" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Upload Form */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Upload Your Resume
          </h2>
          <p className="text-lg text-gray-600">
            Upload your resume and paste the job description to get your ATS compatibility score
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
          {/* Resume Upload Section */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              Upload Resume
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeUpload}
                className="hidden"
                id="resume-upload"
              />
              <label
                htmlFor="resume-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <svg
                  className="w-12 h-12 text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="text-gray-600 mb-2">
                  {resumeFile ? resumeFile.name : "Click to upload or drag and drop"}
                </span>
                <span className="text-sm text-gray-500">
                  PDF, DOC, DOCX (Max 10MB)
                </span>
              </label>
            </div>
          </div>

          {/* Job Description Section */}
          <div className="mb-8">
            <label
              htmlFor="job-description"
              className="block text-lg font-semibold text-gray-900 mb-3"
            >
              Job Description
            </label>
            <textarea
              id="job-description"
              rows={10}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            <p className="text-sm text-gray-500 mt-2">
              Include the full job description for the most accurate analysis
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!resumeFile || !jobDescription || isUploading}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isUploading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Analyzing...
                </span>
              ) : (
                "Analyze Resume"
              )}
            </button>
          </div>
        </form>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-2xl font-bold mb-2">Step 1</div>
            <h4 className="font-semibold text-gray-900 mb-2">Upload Resume</h4>
            <p className="text-sm text-gray-600">
              Upload your resume in PDF, DOC, or DOCX format
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-purple-600 text-2xl font-bold mb-2">Step 2</div>
            <h4 className="font-semibold text-gray-900 mb-2">Add Job Description</h4>
            <p className="text-sm text-gray-600">
              Paste the complete job description for accurate matching
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-600 text-2xl font-bold mb-2">Step 3</div>
            <h4 className="font-semibold text-gray-900 mb-2">Get Results</h4>
            <p className="text-sm text-gray-600">
              Review your ATS score and improvement suggestions
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
