import Image from "next/image";
import Header from "../Header";
import styles from "../page.module.css";
import { Video } from "../container/Video";

export default function About() {
  return (
    <main className={styles.main}>
      <Header />
      <Video src="/main_motion.mp4" width={1100} height={560} />
    </main>
  );
}
