import styles from './Coding.module.css';
import hackerrankLogo from "../../images/hackerrank_logo.svg";
import leetcodeLogo from "../../images/leetcode_logo.png";
// import gfgLogo from "../../images/gfg_logo.svg";

export function CodingProfiles() {
    return (
        <div className={styles.container} id="#coding">
            <h1 className={styles.heading}>Coding Handles</h1>
            <div className={styles.iconsDiv}>
                <div>
                    <a href="https://www.hackerrank.com/munna_gupta2702" rel="noreferrer" target="_blank"><img src={hackerrankLogo} alt="" /></a>
                    <br />
                    <div>HACKERRANK</div>
                </div>
                <div>
                    <a href="https://leetcode.com/Munna_Gupta/" rel="noreferrer" target="_blank"><img src={leetcodeLogo} alt="" /></a>
                    <br />
                    <div>LEETCODE</div>
                </div>
                {/* <div>
                    <a href="" rel="noreferrer" target="_blank"><img src={gfgLogo} alt="" /></a>
                    <br />
                    <div>GEEKSFORGEEKS</div>
                </div> */}
            </div>
        </div>
    );
}