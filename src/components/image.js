import hero from "../images/illustration-hero.svg";

import styles from "./image.module.css";

function Image() {
  return (
    <div>
      <img src={hero} alt="Woman dancing to music" />
    </div>
  );
}

export default Image;
