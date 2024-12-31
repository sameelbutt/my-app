import "./globals.css";

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
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>© 2024 Website. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
