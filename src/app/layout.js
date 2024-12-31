import "./globals.css";
import Link from "next/link";
export const metadata = {
  title: "Website Built with Next.js",
  description: "A beginner-friendly website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        <footer>
          <p>© 2024 Website. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
