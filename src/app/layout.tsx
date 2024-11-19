import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ethio Models Hub | Ethiopian NLP, AI Models, and Datasets",
  description:
    "Explore Ethiopian-related NLP models, AI models, Amharic, Tigrinya, and Oromo datasets. Discover the best research and models in Ethiopia for Machine Learning and AI applications.",
  keywords:
    "Ethiopian models, Ethio NLP, AI models in Ethiopia, best researches in Ethiopia, dataset in Ethiopia, Amharic dataset, Tigrinya dataset, Oromo dataset, Ethiopian AI models",
  robots: "index, follow", // Ensure the page can be crawled and indexed by search engines
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-full flex flex-row justify-center min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}