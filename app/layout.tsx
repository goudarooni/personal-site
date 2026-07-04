import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./global.css";

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    variable: "--font-open-sans"
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
        <html lang="en" className={openSans.variable}>
            <body>{children}</body>
        </html>
    );
}