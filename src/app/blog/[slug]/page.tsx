import PostUser from "@/component/postUser/postUser";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { Suspense } from "react";
import { getPost} from "@/lib/data"
const getData = async (slug: any) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Some thing went Wrong");
  }

  return res.json();
};

export const generateMetadata = async ({ params }: any) => {
  const {slug}=params;

  const post = await getPost(slug);
  return {
    title: post?.title,
    description: post?.desc,
  };
};

const singlePostPage = async ({ params }: any) => {
  const { slug } = params;
  // using api fetching
  const post = await getData(slug);

  // without api fetching
  // const post = await getPost(slug);
  
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
        src={post?.img}
          alt="post image"
          // layout="fill"
          width={500}
          height={300}
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
            <span className={styles.detailValue}>{post?.createdAt.toString().slice(0,10)}</span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
};
export default singlePostPage;
