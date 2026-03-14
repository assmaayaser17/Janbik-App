import type { Metadata } from "next";
import "./globals.css";
import DashboardSidebar from "@/components/DashboardSidebar";
import TopHeader from "@/components/TopHeader";

export const metadata: Metadata = {
  title: "لوحة التحكم | جنبك",
  description: "لوحة تحكم جنبك",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Cairo', 'Segoe UI', Tahoma, sans-serif" }}>
        <div className="flex min-h-screen w-full bg-[#FAFAFA]">
          <DashboardSidebar />
          <main className="flex-1 flex flex-col overflow-hidden pb-14 lg:pb-0">
            <TopHeader />
            <div className="flex-1 overflow-auto">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
