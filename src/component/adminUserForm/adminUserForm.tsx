"use client";

// import { addUser } from "@/lib/action";
// import styles from "./adminUserForm.module.css";
// import { useFormState } from "react-dom";

// const AdminUserForm = () => {
//   const [state, formAction] = useFormState(addUser, undefined);

//   return (
//     <form action={formAction} className={styles.container}>
//       <h1>Add New User</h1>
//       <input type="text" name="username" placeholder="username" />
//       <input type="text" name="email" placeholder="email" />
//       <input type="password" name="password" placeholder="password" />
//       <input type="text" name="img" placeholder="img" />
//       <select name="isAdmin">
//         <option value="false">Is Admin?</option>
//         <option value="false">No</option>
//         <option value="true">Yes</option>
//       </select>
//       <button>Add</button>
//       {state?.error}
//     </form>
//   );
// };

// export default AdminUserForm;

import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";
import { useState } from "react";

interface FormState {
  error: string | null;
  
}
const AdminUserForm: React.FC = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  const [formState, setFormState] = useState<FormState>({ error: null });
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="img" />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {formState.error && <div className="error">{formState.error}</div>}
    </form>
  );
};

export default AdminUserForm;
