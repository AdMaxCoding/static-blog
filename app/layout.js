import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adib's Reviews",
  description: "My opinions on recent movies",
};

export default function RootLayout({ children }) {

  let header = (
    <header>
      <Link href={'/'}>
        <h1>{"Adib's Reviews"}</h1>
      </Link>
    </header>
  )

  let footer = (
    <footer>
      <p>check out the repo on <a href="">GitHub</a></p>
    </footer>
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
