import type { Metadata } from "next";
import { Red_Hat_Mono } from "next/font/google";
import "./globals.css";

const redHatMono = Red_Hat_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    variable: "--font-red-hat-mono"
});

export const metadata: Metadata = {
    title: "Kagan Kiesel",
    description: "personal site"
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={redHatMono.variable}>
            <body>{children}</body>
        </html>
    );
}