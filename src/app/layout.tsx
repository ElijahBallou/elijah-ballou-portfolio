import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elijah Ballou | Developer & Researcher",
  description:
    "Elijah Ballou is a developer and researcher building brain-computer interface games, XR experiences, and AI tools for learning. Six peer-reviewed publications in HCI and computing education.",
  openGraph: {
    title: "Elijah Ballou | Developer & Researcher",
    description:
      "Brain-computer interfaces, extended reality, games, and AI for learning.",
    images: ["/images/elijah-portrait.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1224",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${schibsted.variable} ${sourceSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
