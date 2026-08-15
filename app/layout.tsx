import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-newsreader"
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