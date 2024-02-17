import styles from "./about.module.css";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About description",
};

const aboutPage = () => {
    return (
        <div className={styles.container}>
        <div className={styles.textContainer}>
            <h2 className={styles.subtitle}>About Agency</h2>
            <h1 className={styles.title}>We create digital ideas that are bigger, bolder,braver and better.</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsa autem beatae voluptate nobis nesciunt quo itaque at accusantium, aperiam, dicta corrupti. Consequuntur, odit doloribus eos amet illo quas unde quam quaerat culpa? Quae sit facere fuga quos optio consequatur, nulla temporibus molestias dolores maxime magni laudantium non impedit laborum!</p>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <h1>10 K+</h1>
                    <p>Years of experience</p>
                </div>
                <div className={styles.box}>
                    <h1>10 K+</h1>
                    <p>Years of experience</p>
                </div>
                <div className={styles.box}>
                    <h1>10 K+</h1>
                    <p>Years of experience</p>
                </div>
            </div>
           </div>
        <div className={styles.imgContainer}>
            <Image src="/about.png" alt="about" layout="fill"  className={styles.img} 
            /> 
        </div>
        </div>
    );
    }
    export default aboutPage;