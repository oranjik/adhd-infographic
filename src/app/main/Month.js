import Image from "next/image";
import main from "../main.module.css";
import Link from "next/link";

export default function Month({ href, src }) {
  if (!href) {
    return (
      <div className={main.card}>
        <Image
          src={src}
          alt="circle"
          className={main.gridElement}
          width={64}
          height={64}
        />
      </div>
    );
  }
  return (
    <Link
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
    </Link>
  );
}
