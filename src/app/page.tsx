import styles from "./home.module.css"
import Image from "next/image"
export default function Home() {
  return (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative thought Agency.</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae totam aliquam culpa, quae odit vitae alias quidem laudantium? Accusamus explicabo, dolores eveniet exercitationem in sequi.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="Brands"  fill className={styles.brandsImage}/>
        </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="Hero" layout="fill"  className={styles.heroImage} 
    
      />
    </div>
  </div>);
}