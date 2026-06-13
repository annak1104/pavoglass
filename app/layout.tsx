import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pavoglass.ua"),
  title: "Автоскло Луцьк | Заміна та ремонт автомобільного скла",
  description: "Продаж, заміна та ремонт автомобільного скла у Луцьку.",
  keywords: [
    "автоскло Луцьк",
    "заміна лобового скла",
    "ремонт тріщин скла",
    "тонування автоскла",
    "полірування скла",
  ],
    icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Автоскло Луцьк | Заміна та ремонт автомобільного скла",
    description: "Продаж, заміна та ремонт автомобільного скла у Луцьку.",
    url: "https://pavoglass.ua",
    siteName: "PavoGlass",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Premium automotive glass service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Автоскло Луцьк | Заміна та ремонт автомобільного скла",
    description: "Продаж, заміна та ремонт автомобільного скла у Луцьку.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={manrope.variable} suppressHydrationWarning>
      <body className={`${manrope.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
