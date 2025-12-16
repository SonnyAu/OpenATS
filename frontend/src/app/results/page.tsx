"use client";

import Link from "next/link";

// Mock data for demonstration
const mockResults = {
  overallScore: 78,
  matchedKeywords: [
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "API Development",
    "Git",
    "Agile",
    "CI/CD",
  ],
  missingKeywords: [
    "AWS",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "Testing (Jest/Cypress)",
  ],
  recommendations: [
    {
      title: "Add Missing Keywords",
      description:
        "Include cloud technologies like AWS, Docker, and Kubernetes that are mentioned in the job description.",
      priority: "high",
    },
    {
      title: "Improve Formatting",
      description:
        "Use standard section headers like 'Experience', 'Education', and 'Skills' for better ATS parsing.",
      priority: "medium",
    },
    {
      title: "Quantify Achievements",
      description:
        "Add measurable outcomes to your experience (e.g., 'Increased performance by 40%').",
      priority: "medium",
    },
    {
      title: "Add Testing Experience",
      description:
        "The job description mentions testing frameworks. Consider adding your testing experience.",
      priority: "low",
    },
  ],
};

export default function ResultsPage() {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "bg-green-50";
    if (score >= 60) return "bg-yellow-50";
    return "bg-red-50";
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
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
                className="text-gray-700 hover:text-blue-600 transition-colors"
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

      {/* Results Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your ATS Analysis Results
          </h2>
          <p className="text-lg text-gray-600">
            Here&apos;s how your resume performs against the job description
          </p>
        </div>

        {/* Overall Score Card */}
        <div
          className={`${getScoreBgColor(
            mockResults.overallScore
          )} rounded-2xl p-8 mb-8 text-center`}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Overall ATS Score
          </h3>
          <div
            className={`text-7xl font-bold ${getScoreColor(
              mockResults.overallScore
            )} mb-4`}
          >
            {mockResults.overallScore}%
          </div>
          <p className="text-lg text-gray-700">
            {mockResults.overallScore >= 80
              ? "Excellent! Your resume is well-optimized for ATS"
              : mockResults.overallScore >= 60
              ? "Good start! Some improvements will boost your score"
              : "Your resume needs optimization to pass ATS filters"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Matched Keywords */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Matched Keywords
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              These keywords from the job description appear in your resume:
            </p>
            <div className="flex flex-wrap gap-2">
              {mockResults.matchedKeywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Missing Keywords */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Missing Keywords
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Consider adding these keywords from the job description:
            </p>
            <div className="flex flex-wrap gap-2">
              {mockResults.missingKeywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Recommendations for Improvement
          </h3>
          <div className="space-y-4">
            {mockResults.recommendations.map((rec, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {rec.title}
                  </h4>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(
                      rec.priority
                    )}`}
                  >
                    {rec.priority.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-600">{rec.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <Link
            href="/upload"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Analyze Another Resume
          </Link>
          <button
            onClick={() => window.print()}
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Download Report
          </button>
        </div>
      </main>
    </div>
  );
}
