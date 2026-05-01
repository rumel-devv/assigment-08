import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "animate.css";
import { ToastContainer } from "react-toastify";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TilesGallery |  A website to showcase  tiles.",
  description: " A website to showcase  tiles.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
       
        <main>{children}</main>
          <ToastContainer position="top-center" />
        </body>
    </html>
  );
}
