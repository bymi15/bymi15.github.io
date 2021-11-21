import styles from "../../assets/styles/SocialIcons.module.scss";
import config from "../../config";

const SocialIcons = () => (
  <div className={styles.socialDiv}>
    <a
      className={styles.socialIcon + " " + styles.github}
      href={config.GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="bx bxl-github"></i>
    </a>
    <a
      className={styles.socialIcon + " " + styles.linkedin}
      href={config.LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="bx bxl-linkedin"></i>
    </a>
    <a
      className={styles.socialIcon + " " + styles.stackoverflow}
      href={config.STACKOVERFLOW_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="bx bxl-stack-overflow"></i>
    </a>

    <a
      className={styles.socialIcon + " " + styles.instagram}
      href={config.INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="bx bxl-instagram"></i>
    </a>

    <a
      className={styles.socialIcon + " " + styles.youtube}
      href={config.YOUTUBE_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="bx bxl-youtube"></i>
    </a>
  </div>
);

export default SocialIcons;
