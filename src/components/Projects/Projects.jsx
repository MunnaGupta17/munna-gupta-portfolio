import styles from './Projects.module.css';
import cultfit_homePage from '../../images/Cultfit_homepage.png';
import Sephora_home_page from '../../images/Sephora_home_page.png';
import Bus_home_page from '../../images/busReservationApplication.jpg';
import digi_pocket from '../../images/digi_pocket.png';


export function Projects() {
    return (
        <div className={styles.container} id="#projects">
            <h1 className={styles.heading}>PROJECTS</h1>

            <div>
                <div className={styles.projectBox}>
                    <div className={styles.projectImg}>
                        <img src={digi_pocket} alt="" />
                    </div>
                    <div className={styles.projectDescription}>
                        <h2>Digi Pocket</h2>
                        <p className={styles.descriptionStyles}>Its a Spring-Boot application project to develop REST API for the Online Payement Wallet app.</p>
                        <p className={styles.digitech}>Tech Stack : Java | Spring-Boot | Maven | MySQL | Hibernate | JPA | Swagger</p>
                        <div className={styles.projectLinksDiv}>
                            <div className={styles.projectLinks}>
                                <button onClick={() => { window.open("https://drive.google.com/file/d/11YDz7VcWV5v_gLkD01tTiiDzFaVt4GIV/view?usp=sharing") }}>View Demo</button>
                                <button onClick={() => { window.open("https://github.com/MunnaGupta17/DIGI-POCKET") }}><span><i className="devicon-github-original technology"></i></span> View Source</button>
                            </div>
                            <div className={styles.techStacks}>
                                <div><i class="devicon-java-plain-wordmark colored"></i></div>
                                <div><i class="devicon-spring-plain-wordmark colored"></i></div>
                                <div><i class="devicon-mysql-plain-wordmark colored"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className={styles.projectBox}>
                    <div className={styles.projectImg}>
                        <img src={Bus_home_page} alt="" />
                    </div>
                    <div className={styles.projectDescription}>
                        <h2>My Bus Tickets</h2>
                        <p>This is console based java application where users can book and cancel ticket and admin can login. This Project was
                            individually built by me and completed in 4 days.</p>

                        
                        <div className={styles.projectLinksDiv}>
                            <div className={styles.projectLinks}>
                                <button onClick={() => { window.open("https://drive.google.com/file/d/1PcrMcELaOYK10vGoVAYxHBz8UiN8a06j/view?usp=sharing") }}>View Video</button>
                                <button onClick={() => { window.open("https://github.com/MunnaGupta17/MunnaGupta17-Bus_Ticket_Reservation_System_JAVA_Application") }}><span><i className="devicon-github-original technology"></i></span> View Source</button>
                            </div>
                            <div className={styles.techStacks}>
                                <div><i className="devicon-mysql-plain-wordmark colored"></i></div>
                                <div><i className="devicon-java-plain-wordmark colored"></i></div>
                                <div>
                    <img src="https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg" alt="Hibernate" width="30" height="30" /></div>
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
                                <button onClick={() => { window.open("https://frabjous-buttercream-a19102.netlify.app") }}>View Demo</button>
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

            

            

            

        </div>
    );
}