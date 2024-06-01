import contents from "./contents.module.css";
import motion from "./motion.module.css";
import circle from "./circle.module.css";
import { Video } from "./Video";
export default function Motion({ src }) {
  return (
    <div className={motion.container}>
      <div className={circle.circlePadding} />
      <Video src={src} className={motion.motionBig} />
      <div className={motion.description}>
        Tap left or right arrow to see each feeling
      </div>
    </div>
  );
}
