import { addPost,deletPost } from "@/lib/action";

const serverActionTestPage = () => {
    // const actionInComponent = async () => {
    //     "use server"
    //     console.log("it's working");
    // }
    return <div>
        <form 
        action={addPost}
        // action={actionInComponent}
        >
            <input type="text"  placeholder="title" name="title"/>
            <input type="text"  placeholder="desc" name="desc"/>
            <input type="text"  placeholder="slug" name="slug"/>
            <input type="text"  placeholder="userId" name="userId"/>
            <button>Create</button>
        </form>
        <form action={deletPost}>
            <input type="text"  placeholder="id" name="id"/>
            <button>Delete</button>
        </form>
    </div>
    }
    export default serverActionTestPage;