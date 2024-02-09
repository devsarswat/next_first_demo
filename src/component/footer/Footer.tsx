import styles from "./footer.module.css"
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Dev Sarswat</div>
            <div className={styles.text}>
                learn Creative thought agancy &copy; {new Date().getFullYear()} All rights reserved
            </div>
        </div>
    );
    };
    export default Footer;