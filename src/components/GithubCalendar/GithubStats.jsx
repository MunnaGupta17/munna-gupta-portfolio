import GitHubCalendar from "react-github-calendar";
import styles from "./github.module.css";

export const GithubStats = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Days I code</h1>
            <div className={styles.githubStats}>
                <img
                    height="200px"
                    width="400px"
                    src="https://github-readme-stats.vercel.app/api?username=MunnaGupta17&show_icons=true&locale=en&theme=transparent&hideTitle=true"
                    alt="Munna"
                />
                <img
                    height="200px"
                    width="400px"
                    src="https://github-readme-streak-stats.herokuapp.com/?user=MunnaGupta17&&theme=transparent"
                    alt="Munna"
                />
            </div>
            <div className={styles.GitHubCalendar}>
                <GitHubCalendar
                    username="MunnaGupta17"
                    blockSize={15}
                    blockMargin={5}
                    fontSize={16}
                    hideColorLegend={true}
                    hideTotalCount={true}
                />
            </div>
        </div>
    );
};