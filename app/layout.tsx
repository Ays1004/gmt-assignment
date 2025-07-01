import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Load Google Fonts
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Load Local FreightDisp Font
const freightDisp = localFont({
    src: [
        {
            path: "./fonts/freightdisp/FreightDispProLight-Regular.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/freightdisp/FreightDispProMedium-Regular.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/freightdisp/FreightDispProBold-Regular.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/freightdisp/FreightDispProSemibold-Italic.woff2",
            weight: "600",
            style: "italic",
        },
    ],
    variable: "--font-freight-disp",
    display: "swap",
});

// Load Local FreightSansPro Font
const freightSans = localFont({
    src: [
        {
            path: "./fonts/freightsans/FreightSansProLight-Regular.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/freightsans/FreightSansProMedium-Regular.woff2",
            weight: "500",
            style: "normal",
        },
    ],
    variable: "--font-freight-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Grow My Therapy Assignment",
    description: "Grow My Therapy Assignment - Ritik Yewale",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${freightDisp.variable} ${freightSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
