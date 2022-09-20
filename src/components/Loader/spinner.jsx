import Loader from "react-loader-spinner";
import styles from "./spinner.module.css";

export const Loading = () => {
    return (
        <div className={styles.container}>
            <Loader
                type="ThreeDots"
                color="#3bffe2"
                height="100px"
                width="100px"
                style={{
                    position: "absolute",
                    top: "calc(50% - 50px)",
                    left: "calc(50% - 50px)"
                }}
                timeout={1500} //3 secs
            />
        </div>
    );
}