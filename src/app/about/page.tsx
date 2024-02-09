import styles from "./about.module.css";
import Image from "next/image";
const aboutPage = () => {
    return (
        <div>
        <div className={styles.imgContainer}>

        {/* <Image src="/about.png" alt="About" /> */}
        <Image 
                    src="https://images.pexels.com/photos/14408902/pexels-photo-14408902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="About"
                    width={300}
                    height={100}
                />
              
        </div>
        </div>
    );
    }
    export default aboutPage;