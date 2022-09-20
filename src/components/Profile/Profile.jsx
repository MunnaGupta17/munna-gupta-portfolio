import styles from './Profile.module.css';
import profilePic from '../../images/profilePic.jpg';

export const Profile = () => {
    const handleResumeClick = () => {
        window.open("https://drive.google.com/file/d/1wKYCmsQ1gwGx8RqLwIS4zGJCQa2iNwbD/view?usp=sharing");
    }

    return (
        <div className={styles.container} id="#about">
            <div className={styles.aboutContainer}>
                <div className={styles.flex}>
                    <div className={styles.leftSection}>
                        <h1>Hi, I'm <span>Munna Gupta</span></h1>
                        <h3>Backend Developer</h3>
                        {/* A passionate programmer with a curious mind who loves solving problems. I have an experience of building Web applications with JavaScript / Reactjs / HTML / CSS etc. I'm currently actively looking for new opportunities */}
                        <p>An aspiring backend developer specialized in java. Who always love to learn new things. Good problem solver and quick learner. Possess strong leadership qualities and looking farward to an exciting oppertunity and development experience.</p>
                        <div className={styles.contactIcons}>
                            <a href="https://www.linkedin.com/in/munnagupta2002/" rel="noreferrer" target="_blank"><div><i className="fab fa-linkedin-in"></i></div></a>
                            <a href="https://github.com/MunnaGupta17" rel="noreferrer" target="_blank"><div><i className="fab fa-github"></i></div></a>
                            <a href="mailto:gupta.chandan1499@gmail.com"><div><i className="fas fa-envelope"></i></div></a>
                        </div>
                        <div className={styles.contactNum}>
                            <div>
                                <span><i class="fas fa-map-marker-alt"></i></span>
                                <p>New Delhi, India</p>
                            </div>
                            <div>
                                <span><i className="fas fa-mobile-alt"></i></span>
                                <p>+91 7683081924</p>
                            </div>
                        </div>
                        <button className={styles.resumeButton} onClick={handleResumeClick}>Resume</button>
                    </div>
                    <div className={styles.rightSection}>
                        <img src={profilePic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}