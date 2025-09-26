import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})
 
export const metadata: Metadata = {
  title: "NTUANANH - Backend Develop",
  description: "Backend Developer focused on problem-solving, data handling, and security.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2487WYD37R"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2487WYD37R');
            `,
          }}
        />
        <meta name="google-site-verification" content="eHUnxmjqtPW059Hs3tHH8yb1VsSkjr4xhlrvJG7ZiQM" />
      </head>
      <body className="font-sans antialiased">
        <div className="mandala-background"></div>
        {children}
      </body>
    </html>
  )
}
