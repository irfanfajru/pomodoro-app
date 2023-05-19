import "./globals.css";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Study With Me | Pomodoro",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
