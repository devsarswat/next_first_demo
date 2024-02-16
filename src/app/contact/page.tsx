import styles from './contact.module.css';
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const contactPage = () => {
  return (
    <div className={styles.container}>
     <div className={styles.imgContainer}>
      <Image src="/contact.png" alt="contact Image" layout="fill"  className={styles.img}/>
     </div>
     <div className={styles.formContainer}>
      <form className={styles.form}>
        <input type="text" placeholder="Name and Surename" />
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Phone Number" />
        <textarea  name='' id=''  cols={30} rows={10} placeholder="Message" />
        <button>Send</button>
      </form>
     </div>
    </div>
  );
};
export default contactPage;