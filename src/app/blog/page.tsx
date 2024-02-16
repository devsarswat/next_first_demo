import PostCard from "@/component/postCard/postCard";
import styles from "./blog.module.css";
import {getPosts} from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "Blog description",
}; 
const getData =async() => {
    const res = await fetch("http://localhost:3000/api/blog") // it store api responce in catch
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts" ,{cache:'no-store'})  // it will not store api responce in catch 
    if(!res.ok){
        throw new Error("Some thing went Wrong")
    }

    return res.json()
}
const blogPage = async () => {
  // using api data fetching
    const posts =await getData()
    
    //  without api data fetching
    // const posts =await getPosts()
  return (
    <div className={styles.container}>
        {posts.map((post:any)=>(
            <div className={styles.post} key={post.id}>
        <PostCard post={post}/>
      </div>
    ))}
      
    </div>
  );
};
export default blogPage;
