import PostUser from "@/component/postUser/postUser";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { Suspense } from "react";
import { getPost} from "@/lib/data"
// const getData = async (slug: any) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Some thing went Wrong");
//   }

//   return res.json();
// };

const singlePostPage = async ({ params }: any) => {
  const { slug } = params;
  // const post = await getData(slug);
  const post = await getPost(slug);
  
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
        src={post?.img}
          // src="https://images.pexels.com/photos/5501162/pexels-photo-5501162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="post image"
          layout="fill"
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post?.userId} />
          </Suspense>
          <div className={styles.deftailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post?.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
};
export default singlePostPage;
