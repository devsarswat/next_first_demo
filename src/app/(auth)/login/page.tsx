import LoginForm from "@/component/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css"

const loginPage = async () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default loginPage;