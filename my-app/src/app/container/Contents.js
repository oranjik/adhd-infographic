import Image from "next/image";
import contents from "./contents.module.css";
import circle from "./circle.module.css";
export default function Contents({
  src,
  tagName,
  emotionName,
  thinkingName,
  children,
}) {
  return (
    <div className={contents.container}>
      <div className={circle.circlePadding} />
      <Image
        src={src}
        className={contents.circleBig}
        width={1100}
        height={700}
      />
      <div className={contents.names}>
        <div className={contents.tagName}>{tagName}</div>
        <div className={contents.emotionName}>{emotionName}</div>
        <div className={contents.thinkingName}>{thinkingName}</div>
      </div>
      <div className={contents.cardContainer}>{children}</div>
    </div>
  );
}
