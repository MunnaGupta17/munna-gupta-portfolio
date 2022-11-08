import styles from './Skills.module.css';

export const Skills = () => {
    return (
        <div className={styles.container} id="#skills">
            <h1 className={styles.heading}>SKILLS</h1>
            <div className={styles.iconsDiv}>
                <div>
                    <i class="devicon-java-plain colored"></i><br />
                    <div>JAVA</div>
                </div>
                <div>
                    <i className="devicon-spring-plain"></i><br />
                    <div>SPRING</div>
                </div>
                <div>
                    <i class="devicon-mysql-plain"></i><br />
                    <div>MY SQL</div>
                </div>
                <div>
                    <i className="devicon-html5-plain-wordmark colored technology"></i><br />
                    <div>HTML5</div>
                </div>
                <div>
                    <i className="devicon-css3-plain-wordmark colored technology"></i><br />
                    <div>CSS3</div>
                </div>
                <div>
                    <i className="devicon-javascript-plain colored technology"></i><br />
                    <div>JAVASCRIPT</div>
                </div>

                <div>
                    <i className="devicon-github-original technology"></i><br />
                    <div>GITHUB</div>
                </div>
                <div>
                    <i className="devicon-git-plain-wordmark colored technology"></i><br />
                    <div>GIT</div>
                </div>
                
                

            </div>
        </div>
    );
}











