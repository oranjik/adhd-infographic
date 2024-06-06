import contents from "./contents.module.css";
import motion from "./motion.module.css";
import circle from "./circle.module.css";
import { Video } from "./Video";
import { useTranslation } from "../contexts/TranslationContext";
export default function Motion({ src }) {
  const { switchLanguage, language } = useTranslation();
  return (
    <div className={motion.container}>
      <div className={circle.circlePadding} />
      <Video src={src} className={motion.motionBig} />
      <div className={motion.description}>
        {language == "ko"
          ? "왼쪽과 오른쪽 화살표를 클릭하여 감정을 확인해보세요!"
          : "Tap left or right arrow to see each feeling!"}
      </div>
    </div>
  );
}
