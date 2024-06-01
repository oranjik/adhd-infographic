import Image from "next/image";
import main from "../main.module.css";

export default function Month({ href, src }) {
  return (
    <a
      href={`pages/${href}`}
      className={main.card}
      target="_self"
      rel="noopener noreferrer"
    >
      <Image
        src={src}
        alt="circle"
        className={main.gridElement}
        width={64}
        height={64}
      />
    </a>
  );
}
