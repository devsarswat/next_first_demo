import type { Metadata } from "next";
import styles from "./admin.module.css";
import { Suspense } from "react";
import AdminPosts from "@/component/adminPosts/adminPosts";
import AdminPostForm from "@/component/adminPostForm/adminPostForm";
import AdminUsers from "@/component/adminUsers/adminUsers";
import AdminUserForm from "@/component/adminUserForm/adminUserForm";
import { auth } from "@/lib/auth"; 

export const metadata: Metadata = {
  title: "Admin Page",
  description: "admin description",
};

const AdminPage = async () => {
  const session:any = await auth();
  
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId = {session?.id}/>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
