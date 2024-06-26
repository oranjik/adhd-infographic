import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "./contexts/TranslationContext";

const inter = Inter({ subsets: ["latin"] });

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <TranslationProvider>{children}</TranslationProvider>
      </body>
    </html>
  );
}
