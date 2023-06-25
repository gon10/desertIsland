import Navbar from "@/components/navBar";
import { Metadata } from "next";
// import { Shantell_Sans } from "@next/font/google";
// import localFont from "@next/font/local";
import { Shantell_Sans } from "next/font/google";
import "./globals.css";

// const shantellSansFont = Shantell_Sans({
//   // weight: "700",
//   // subsets: ["latin"],
//   variable: "--font-shantellSans",
//   // display: "swap",
// });

// const shantellSansFont = localFont({
//   src: "../public/fonts/ShantellSans-Medium.ttf",
//   variable: "--font-shantellSans",
// });

const santell = Shantell_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-shantellSans",
});

export const metadata: Metadata = {
  title: {
    default: "Desert Island",
    template: "%s | Desert Island",
  },
  description: "Survive, imrpove, conquer.",
  // openGraph: {
  //   title: 'Lee Robinson',
  //   description: 'Developer, writer, and creator.',
  //   url: 'https://leerob.io',
  //   siteName: 'Lee Robinson',
  //   images: [
  //     {
  //       url: 'https://leerob.io/og.jpg',
  //       width: 1920,
  //       height: 1080,
  //     },
  //   ],
  //   locale: 'en-US',
  //   type: 'website',
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // twitter: {
  //   title: 'Lee Robinson',
  //   card: 'summary_large_image',
  // },
  // icons: {
  //   shortcut: '/favicon.ico',
  // },
  // verification: {
  //   google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
  //   yandex: '14d2e73487fa6c71',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
      bg-[#070609] text-[#b4bab5]
      ${santell.variable} font-sans`}
    >
      <body className=" h-full">
        <Navbar />
        <main className="">
          {children}
          {/* <AnalyticsWrapper /> */}
        </main>
      </body>
    </html>
  );
}
