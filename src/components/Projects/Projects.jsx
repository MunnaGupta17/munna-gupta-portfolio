import styles from "./Projects.module.css";
import cultfit_homePage from "../../images/Cultfit_homepage.png";
import Sephora_home_page from "../../images/Sephora_home_page.png";
import Bus_home_page from "../../images/busReservationApplication.jpg";
import digi_pocket from "../../images/digi_pocket.png";
import dropbox from "../../images/dropbox.png";
import task from "../../images/task.jpg";
import matromonial from "../../images/matromonial.jpg";

export function Projects() {
  return (
    <div className={styles.container} id="#projects">
      <h1 className={styles.heading}>PROJECTS</h1>

      <div>
        <div className={styles.projectBox}>
          <div className={styles.projectImg}>
            <img src={dropbox} alt="" />
          </div>
          <div className={styles.projectDescription}>
            <h2>Dropbox</h2>
            <p className={styles.descriptionStyles}>
              Created a comprehensive replica of the Dropbox homepage using
              React.js, focusing on enhancing frontend skills and interactive
              elements.
            </p>
            <p className={styles.digitech}>
              Tech Stack : React js | Javascript | HTML | CSS | React-router-dom
              | States | Hooks
            </p>
            <div className={styles.projectLinksDiv}>
              <div className={styles.projectLinks}>
                <button
                  onClick={() => {
                    window.open(
                      "https://dropbox-homepage-bymunna.netlify.app/"
                    );
                  }}
                >
                  View Demo
                </button>
                <button
                  onClick={() => {
                    window.open(
                      "https://github.com/MunnaGupta17/Dropbox_Homepage_Clone"
                    );
                  }}
                >
                  <span>
                    <i className="devicon-github-original technology"></i>
                  </span>{" "}
                  View Source
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.projectBox}>
          <div className={styles.projectImg}>
            <img src={matromonial} alt="" />
          </div>
          <div className={styles.projectDescription}>
            <h2>Wedlock</h2>
            <p className={styles.descriptionStyles}>
              Designed and implemented a feature-rich Matrimonial REST API using
              Java and Spring, enabling user registration, profile management,
              proposal handling, messaging, matching, photo sharing, reporting,
              & more.
            </p>
            <p className={styles.digitech}>
              Tech Stack : Java | Spring | Spring Data JPA | Maven | MySQL |
            </p>
            <div className={styles.projectLinksDiv}>
              <div className={styles.projectLinks}>
                <button
                  onClick={() => {
                    window.open("https://github.com/MunnaGupta17/WEDLOCK.COM");
                  }}
                >
                  <span>
                    <i className="devicon-github-original technology"></i>
                  </span>{" "}
                  View Source
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.projectBox}>
          <div className={styles.projectImg}>
            <img src={task} alt="" />
          </div>
          <div className={styles.projectDescription}>
            <h2>Task Scheduler</h2>
            <p className={styles.descriptionStyles}>
              Simplify project management and collaboration with the Task
              Scheduler REST API. This API allows users to create sprints, add
              tasks,assign task, and track progress programmatically. Enhance
              productivity with seamless integration into your applications.
            </p>
            <p className={styles.digitech}>
              Tech Stack : Java | Spring | MySQL | Spring Data JPA | Maven
            </p>
            <div className={styles.projectLinksDiv}>
              <div className={styles.projectLinks}>
                {/* <button
                  onClick={() => {
                    window.open(
                      "https://dropbox-homepage-bymunna.netlify.app/"
                    );
                  }}
                >
                  View Demo
                </button> */}
                <button
                  onClick={() => {
                    window.open(
                      "https://github.com/MunnaGupta17/PayPal-Task-Scheduler-Assignment"
                    );
                  }}
                >
                  <span>
                    <i className="devicon-github-original technology"></i>
                  </span>{" "}
                  View Source
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.projectBox}>
          <div className={styles.projectImg}>
            <img src={digi_pocket} alt="" />
          </div>
          <div className={styles.projectDescription}>
            <h2>Digi Pocket</h2>
            <p className={styles.descriptionStyles}>
              Its a Spring-Boot application project to develop REST API for the
              Online Payement Wallet app.
            </p>
            <p className={styles.digitech}>
              Tech Stack : Java | Spring-Boot | Maven | MySQL | Hibernate | JPA
              | Swagger
            </p>
            <div className={styles.projectLinksDiv}>
              <div className={styles.projectLinks}>
                <button
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/11YDz7VcWV5v_gLkD01tTiiDzFaVt4GIV/view?usp=sharing"
                    );
                  }}
                >
                  View Demo
                </button>
                <button
                  onClick={() => {
                    window.open("https://github.com/MunnaGupta17/DIGI-POCKET");
                  }}
                >
                  <span>
                    <i className="devicon-github-original technology"></i>
                  </span>{" "}
                  View Source
                </button>
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
            <p>
              This is console based java application where users can book and
              cancel ticket and admin can login. This Project was individually
              built by me and completed in 4 days.
            </p>
            <p className={styles.digitech}>
              Tech Stack : Java | Hibernate | SQL | MySQL | Maven
            </p>

            <div className={styles.projectLinksDiv}>
              <div className={styles.projectLinks}>
                <button
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1PcrMcELaOYK10vGoVAYxHBz8UiN8a06j/view?usp=sharing"
                    );
                  }}
                >
                  View Video
                </button>
                <button
                  onClick={() => {
                    window.open(
                      "https://github.com/MunnaGupta17/MunnaGupta17-Bus_Ticket_Reservation_System_JAVA_Application"
                    );
                  }}
                >
                  <span>
                    <i className="devicon-github-original technology"></i>
                  </span>{" "}
                  View Source
                </button>
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
            <p>
              This project is a clone of Sephora's website, allowing users to
              purchase beauty and makeup cosmetics.
            </p>
            <p className={styles.digitech}>
              Tech Stack : Javascript | HTML | CSS
            </p>
            <div className={styles.projectLinksDiv}>
              <div className={styles.projectLinks}>
                <button
                  onClick={() => {
                    window.open(
                      "https://frabjous-buttercream-a19102.netlify.app"
                    );
                  }}
                >
                  View Demo
                </button>
                <button
                  onClick={() => {
                    window.open(
                      "https://github.com/Dikshant535/driven-blow-8617"
                    );
                  }}
                >
                  <span>
                    <i className="devicon-github-original technology"></i>
                  </span>{" "}
                  View Source
                </button>
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
            <p className={styles.projectDescriptionptag}>
              This project is a clone of Cultfit, offering gym memberships,
              sportswear, and healthy food orders directly on the website. It
              was created using HTML, CSS, and Javascript, with user details
              stored in local storage.
            </p>
            <p className={styles.digitech}>
              Tech Stack : Javascript | HTML | CSS
            </p>
            <div className={styles.projectLinksDiv}>
              <div className={styles.projectLinks}>
                <button
                  onClick={() => {
                    window.open("https://cultfit-clone.vercel.app/");
                  }}
                >
                  View Demo
                </button>
                <button
                  onClick={() => {
                    window.open(
                      "https://github.com/MunnaGupta17/Cultfit_Clone"
                    );
                  }}
                >
                  <span>
                    <i className="devicon-github-original technology"></i>
                  </span>{" "}
                  View Source
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
