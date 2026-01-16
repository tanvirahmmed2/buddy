
import { Metadata } from "next";
import "./globals.css";
import ContextProvider from "@/component/context/Context";
import Navbar from "@/component/bar/Navbar";
import Footer from "@/component/bar/Footer";

export const metadata:Metadata={
  title:'Your Buddy',
  description:'Your daily life buddy'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased `}
      >
        <ContextProvider>
          <Navbar/>
          {children}
          <Footer/>
        </ContextProvider>
      </body>
    </html>
  );
}
