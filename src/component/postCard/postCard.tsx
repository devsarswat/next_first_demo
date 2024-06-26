import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({post}:{post:any}) => {
  const desc = post?.desc.split(' ').slice(0, 30).join(' ');
  const shortDesc = post?.desc.split(' ').length > 30 ? `${desc}...` : desc;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
          src={post.img}
            // src="https://images.pexels.com/photos/5501162/pexels-photo-5501162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="post"
            layout="fill"
            className={styles.img}
          />
        </div>
        <span className={styles.date}>{post?.createdAt.toString().slice(0,10)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post?.title}</h1>
        <p className={styles.desc}>{shortDesc}</p>
        <Link href={`/blog/${post?.slug}`} className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};
export default PostCard;
