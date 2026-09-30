import "./globals.css";
import localFont from "next/font/local";
import Header from "./components/Header/Header";

const gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Regular_0.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Bold_0.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

const benzin = localFont({
  src: "./fonts/Benzin-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-benzin",
  display: "swap",
});

export const metadata = {
  title: "Celestia",
  description: "Агентство событий",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${gilroy.variable} ${benzin.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
