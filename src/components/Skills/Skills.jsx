import styles from './Skills.module.css';
import ReactLogo from "../../images/logo192.png";
import JunitLogo from "../../images/jUnit.png";
import restApi from "../../images/restApi.png";
import postman from "../../images/postman.png";

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
                    <img src="https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg" alt="Hibernate" width="100" height="72" />
                    <div>Hibernate</div>
                </div>
                <div>
                    <i className="devicon-spring-plain"></i><br />
                    <div>SPRING</div>
                </div>
                <div>
                    <img src={restApi}  /><br />
                    <div>Rest API</div>
                </div>
                <div>
                    <i class="devicon-mysql-plain"></i><br />
                    <div>MY SQL</div>
                </div>
                
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Apache_Feather_Logo.svg/96px-Apache_Feather_Logo.svg.png" alt="Hibernate" width="100" height="72" />
                    <div>Maven</div>
                </div>
                <div>
                    <img src={JunitLogo}  /><br />
                    <div>J Unit</div>
                </div>
                <div>
                    <img src={ReactLogo}  /><br />
                    <div>React js</div>
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
                    <i className="devicon-git-plain-wordmark colored technology"></i><br />
                    <div>GIT</div>
                </div>
                <div>
                    <i className="devicon-github-original technology"></i><br />
                    <div>GITHUB</div>
                </div>
                <div>
                    <iconify-icon icon="logos:swagger" width="100" height="72"></iconify-icon>
                    <div>Swagger</div>
                </div>
                <div>
                    <img src={postman}  /><br />
                    <div>Postman</div>
                </div>
                
                
                


            </div>
        </div>
    );
}











