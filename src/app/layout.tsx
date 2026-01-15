
import { Metadata } from "next";
import "./globals.css";

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
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
