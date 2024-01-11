import styles from "@/components/ui/login/login.module.css";
import LoginForm from "@/components/ui/login/loginForm/loginForm";
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;