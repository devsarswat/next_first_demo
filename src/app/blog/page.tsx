import PostCard from "@/component/postCard/postCard";
import styles from "./blog.module.css";
import {getPosts} from "@/lib/data";

// const getData =async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts") // it store api responce in catch
//     // const res = await fetch("https://jsonplaceholder.typicode.com/posts" ,{cache:'no-store'})  // it will not store api responce in catch 
//     if(!res.ok){
//         throw new Error("Some thing went Wrong")
//     }

//     return res.json()
// }
const blogPage = async () => {
    // const posts =await getData()
    const posts =await getPosts()
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
