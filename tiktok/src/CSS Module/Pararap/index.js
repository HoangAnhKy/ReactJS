import clsx from "clsx";
import styles from "./Css.module.css";
function Index() {
    return (
        <h1
            className={clsx(
                styles.header,
                styles.header2
            )`${styles.header} global_h1`}>
            Css from Pararap
        </h1>
    );
}
export default Index;
