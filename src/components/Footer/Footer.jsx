import styles from './Footer.module.css';

export function Footer() {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className={styles.container} id="#contact">
            <div className={styles.gotoTopBtn} onClick={handleScrollTop}><i className="fas fa-angle-up"></i></div>
            <div className={styles.flex}>
                <a href="https://www.linkedin.com/in/munnagupta2002/" rel="noreferrer" target="_blank"><div><i className="fab fa-linkedin-in"></i></div></a>
                <a href="https://github.com/MunnaGupta17" rel="noreferrer" target="_blank"><div><i className="fab fa-github"></i></div></a>
                <a href="mailto:munna.gupta2702@gmail.com"><div><i className="fas fa-envelope"></i></div></a>
            </div>
            <div className={styles.contactNum}>
                <div>
                    <span><i class="fas fa-map-marker-alt"></i></span>
                    <p>New Delhi, India</p>
                </div>
                <div>
                    <span><i className="fas fa-envelope"></i></span>
                    <p>munna.gupta2702@gmail.com</p>
                </div>
                <div>
                    <span><i className="fas fa-mobile-alt"></i></span>
                    <p>+91 7683081924</p>
                </div>
            </div>
            <div>
                <p>Designed and build by Munna Gupta</p>
            </div>
        </div>
    );
}