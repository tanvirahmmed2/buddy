
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
