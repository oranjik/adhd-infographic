import Image from "next/image";
import styles from "./page.module.css";
import header from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={header.description}>
      <p>ABOUT</p>
      <div>
        <a href="/" target="_self" rel="noopener noreferrer">
          {" "}
          <Image
            src="/logo.png"
            alt="ADHD Logo"
            className={styles.vercelLogo}
            fontSize={15}
            width={160}
            height={54}
            priority
          />
        </a>
      </div>
      <div className={header.languageSetting}>
        <Link href="/" className={header.language}>
          ENG
        </Link>
        <Link href="/" className={header.language}>
          KOR
        </Link>
      </div>
    </div>
  );
}
