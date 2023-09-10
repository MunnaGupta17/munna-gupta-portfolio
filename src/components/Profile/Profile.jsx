import styles from "./Profile.module.css";
import profilePic from "../../images/profilePic2.jpg";

export const Profile = () => {
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1oSTiiqp6JpV1ioq0lyVMx0jH3b5vSndw/view?usp=sharing"
    );
  };

  return (
    <div className={styles.container} id="#about">
      <div className={styles.aboutContainer}>
        <div className={styles.flex}>
          <div className={styles.leftSection}>
            <h1>
              Hi, I'm <span>Munna Gupta</span>
            </h1>
            <h3>Full-Stack Web Development</h3>
            {/* A passionate programmer with a curious mind who loves solving problems. I have an experience of building Web applications with JavaScript / Reactjs / HTML / CSS etc. I'm currently actively looking for new opportunities */}
            <p>
              Highly skilled Full Stack Developer with expertise in building
              end-to-end web applications. Proficient in a wide range of
              technologies, frameworks, and tools. Committed to delivering
              efficient and scalable solutions, combining strong problem-solving
              abilities with a keen eye for detail. Passionate about leveraging
              technology to create impactful and user-centric experiences.
            </p>
            <div className={styles.contactIcons}>
              <a
                href="https://www.linkedin.com/in/munnagupta2002/"
                rel="noreferrer"
                target="_blank"
              >
                <div>
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </a>
              <a
                href="https://github.com/MunnaGupta17"
                rel="noreferrer"
                target="_blank"
              >
                <div>
                  <i className="fab fa-github"></i>
                </div>
              </a>
              <a href="mailto:munna.gupta2702@gmail.com">
                <div>
                  <i className="fas fa-envelope"></i>
                </div>
              </a>
            </div>
            <div className={styles.contactNum}>
              <div>
                <span>
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <p>New Delhi, India</p>
              </div>
              <div>
                <span>
                  <i className="fas fa-mobile-alt"></i>
                </span>
                <p>+91 7683081924</p>
              </div>
            </div>
            <button className={styles.resumeButton} onClick={handleResumeClick}>
              Resume
            </button>
          </div>
          <div className={styles.rightSection}>
            <img src={profilePic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
