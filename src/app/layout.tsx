import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "بذرة | Bithrah - منصة الأفكار والابتكار",
  description: "منصة رقمية ذكية تعتمد على السلوك الحقيقي للمستخدم. مبدأ المستخدم الواحد، الحماية الفائقة، والذكاء الاصطناعي السلوكي.",
  keywords: "بذرة, Bithrah, منصة ذكية, ذكاء اصطناعي, حماية, استثمار, أفكار",
  authors: [{ name: "Bithrah Team" }],
  openGraph: {
    title: "بذرة | Bithrah - منصة الأفكار والابتكار",
    description: "منصة رقمية ذكية تعتمد على السلوك الحقيقي للمستخدم",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
