import styles from './Projects.module.css';
import cultfit_homePage from '../../images/Cultfit_homepage.png';
import Sephora_home_page from '../../images/Sephora_home_page.png';


export function Projects() {
    return (
        <div className={styles.container} id="#projects">
            <h1 className={styles.heading}>PROJECTS</h1>
            <div>
                <div className={styles.projectBox}>
                    <div className={styles.projectImg}>
                        <img src={cultfit_homePage} alt="" />
                    </div>
                    <div className={styles.projectDescription}>
                        <h2>Cultfit</h2>
                        <p>This is clone of the Cultfit website where users can take Cultfit gym membership pass and from the website itself users can buy sportswear and can also order healthy foods. I myself clone cultfit website and most of the functionality using HTML, CSS and Javascript and for saving user details we used localstorage.</p>
                        <div className={styles.projectLinksDiv}>
                            <div className={styles.projectLinks}>
                                <button onClick={() => { window.open("https://cultfit-clone.vercel.app/") }}>View Demo</button>
                                <button onClick={() => { window.open("https://github.com/MunnaGupta17/Cultfit_Clone") }}><span><i className="devicon-github-original technology"></i></span> View Source</button>
                            </div>
                            <div className={styles.techStacks}>
                                <div><i className="devicon-javascript-plain colored technology"></i></div>
                                <div><i className="devicon-css3-plain-wordmark colored technology"></i></div>
                                <div><i className="devicon-html5-plain-wordmark colored technology"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className={styles.projectBox}>
                    <div className={styles.projectImg}>
                        <img src={Sephora_home_page} alt="" />
                    </div>
                    <div className={styles.projectDescription}>
                        <h2>Sephora</h2>
                        <p>This is clone of the Sephora website where users can buy Beauty and Make-Up cosmetics. With my Team of 5 Members we clone Sephora website and most of the functionality using HTML, CSS and Javascript and for saving user details we used localstorage.</p>
                        <div className={styles.projectLinksDiv}>
                            <div className={styles.projectLinks}>
                                <button onClick={() => { window.open("https://stalwart-tarsier-33c6f5.netlify.app/index.html") }}>View Demo</button>
                                <button onClick={() => { window.open("https://github.com/Dikshant535/driven-blow-8617") }}><span><i className="devicon-github-original technology"></i></span> View Source</button>
                            </div>
                            <div className={styles.techStacks}>
                                <div><i className="devicon-javascript-plain colored technology"></i></div>
                                <div><i className="devicon-css3-plain-wordmark colored technology"></i></div>
                                <div><i className="devicon-html5-plain-wordmark colored technology"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}