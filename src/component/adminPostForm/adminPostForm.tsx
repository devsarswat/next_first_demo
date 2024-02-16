"use client"

// import { addPost } from "@/lib/action";
// import styles from "./adminPostForm.module.css";
// import { useFormState } from "react-dom";

// const AdminPostForm = ({userId}:any) => {
//   const [state, formAction] = useFormState(addPost, undefined);
  
//   return (
//     <form action={formAction} className={styles.container}>
//       <h1>Add New Post</h1>
//       <input type="hidden" name="userId" value={userId} />
//       <input type="text" name="title" placeholder="Title" />
//       <input type="text" name="slug" placeholder="slug" />
//       <input type="text" name="img" placeholder="img" />
//       <textarea  name="desc" placeholder="desc" rows={10} />
//       <button>Add</button>
//       {state?.error}
//     </form>
//   );
// };

// export default AdminPostForm;
import { useState } from "react";
import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

interface FormState {
  error: string | null;
  // Add any other fields you have in your state here
}

const AdminPostForm: React.FC<{ userId: any }> = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  const [formState, setFormState] = useState<FormState>({ error: null });

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea name="desc" placeholder="desc" rows={10} />
      <button>Add</button>
      {formState.error && <div className="error">{formState.error}</div>}
    </form>
  );
};

export default AdminPostForm;
