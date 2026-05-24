import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TimeInvoice – Track time and generate invoices automatically",
  description: "Track work time across projects and automatically generate professional invoices with payment links. Built for freelancers, consultants, and small agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="17e97f50-1693-4106-a41b-fd4d8a99ea07"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
