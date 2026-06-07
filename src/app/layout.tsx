import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'Thrift Haven | Sustainable & Trendy Gen-Z Fashion',
  description: 'Discover unique, pre-loved clothing for Gen-Z at Thrift Haven. Shop sustainable and trendy fashion with curated collections and affordable prices.',
  keywords: ["thrift, sustainable fashion, gen z, vintage clothing, secondhand, eco-friendly, minimalist, trendy, affordable fashion"],
  openGraph: {
    "title": "Thrift Haven | Sustainable & Trendy Gen-Z Fashion",
    "description": "Discover unique, pre-loved clothing for Gen-Z at Thrift Haven. Shop sustainable and trendy fashion with curated collections and affordable prices.",
    "url": "https://www.thrifthaven.com",
    "siteName": "Thrift Haven",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/young-couple-posing-outdoors_23-2148774639.jpg",
        "alt": "Gen-Z enjoying thrift shopping"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Thrift Haven | Sustainable & Trendy Gen-Z Fashion",
    "description": "Discover unique, pre-loved clothing for Gen-Z at Thrift Haven. Shop sustainable and trendy fashion with curated collections and affordable prices.",
    "images": [
      "http://img.b2bpic.net/free-photo/young-couple-posing-outdoors_23-2148774639.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
