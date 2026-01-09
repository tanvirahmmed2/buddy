
import Navbar from "@/components/bars/Navbar";
import "./globals.css";
import Footer from "@/components/bars/Footer";


export const metadata = {
  title: "Message Your Buddy",
  description: "Message Your Buddy By nEXT js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="w-full overflow-x-hidden"
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
