import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShareThoughts",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}