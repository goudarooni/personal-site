import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const xenon = localFont({
    src: "../public/fonts/Monaspace Xenon Var.woff2",
    variable: "--font-xenon",
    display: "swap",
    weight: "200 800",
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
        <html lang="en" className={xenon.variable}>
            <body>{children}</body>
        </html>
    );
}