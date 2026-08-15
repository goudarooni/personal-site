import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = newsreader({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    variable: "--newsreader"
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
        <html lang="en" className={newsreader.variable}>
            <body>{children}</body>
        </html>
    );
}