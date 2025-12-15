import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenATS - Resume ATS Scanner",
  description: "Open-source ATS scanner to optimize your resume for Applicant Tracking Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
