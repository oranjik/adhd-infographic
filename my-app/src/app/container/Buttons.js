import Image from "next/image";
import buttons from "./buttons.module.css";
import Link from "next/link";

export default function Buttons({ changePage }) {
  return (
    <div className={buttons.uiContainer}>
      <div className={buttons.backButtonContainer}>
        <Link href="/" target="_self">
          <Image
            src="/back.png"
            className={buttons.backButton}
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className={buttons.sidedArrow}>
        <Image
          src="/arrow-left.svg"
          className={buttons.bothArrow}
          width={40}
          height={40}
          onClick={() => changePage(-1)}
        />
        <Image
          src="/arrow-right.svg"
          className={buttons.bothArrow}
          width={40}
          height={40}
          onClick={() => changePage(1)}
        />
      </div>
    </div>
  );
}
