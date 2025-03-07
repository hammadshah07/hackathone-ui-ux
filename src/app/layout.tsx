import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Poppins } from "next/font/google";
import Footer from "@/components/footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
