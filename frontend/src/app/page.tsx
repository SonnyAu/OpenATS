import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">OpenATS</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/upload" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Upload Resume
              </Link>
              <Link 
                href="#features" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </Link>
              <Link 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Optimize Your Resume for
            <span className="text-blue-600"> ATS Success</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Upload your resume and job description to get instant feedback on how well 
            your resume matches Applicant Tracking System requirements.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/upload"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Scan Your Resume
            </Link>
            <a 
              href="https://github.com/SonnyAu/OpenATS"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Features
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Resume Parsing
              </h4>
              <p className="text-gray-600">
                Automatically extract and analyze key information from your resume including 
                skills, experience, and education.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Match Score
              </h4>
              <p className="text-gray-600">
                Get a comprehensive match score showing how well your resume aligns 
                with the job description and ATS requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Actionable Insights
              </h4>
              <p className="text-gray-600">
                Receive detailed recommendations on how to improve your resume for 
                better ATS compatibility and keyword optimization.
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="py-16">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
              About OpenATS
            </h3>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-6">
              OpenATS is an open-source project designed to help job seekers optimize their 
              resumes for Applicant Tracking Systems. Our mission is to democratize access 
              to resume optimization tools and help everyone have a fair chance in the job 
              application process.
            </p>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Built with Next.js, TypeScript, and TailwindCSS, and containerized with Docker 
              for easy deployment. Infrastructure managed with Terraform for scalable AWS deployment.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">OpenATS</h3>
              <p className="text-gray-400">Open-source ATS Scanner</p>
            </div>
            <div className="flex gap-6">
              <a 
                href="https://github.com/SonnyAu/OpenATS" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Documentation
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contributing
              </a>
            </div>
          </div>
          <div className="text-center text-gray-400 mt-8 pt-8 border-t border-gray-800">
            © 2025 OpenATS. Open-source under MIT License.
          </div>
        </div>
      </footer>
    </div>
  );
}
