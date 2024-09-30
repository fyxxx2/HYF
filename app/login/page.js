// app/login/page.js
import LoginForm from '../components/LoginForm';
import styles from '../styles/Home.module.css';

const LoginPage = () => (
    <main className={styles.main}>
        <div className={styles.formWrapper}>
            <LoginForm />
        </div>
    </main>
);

export default LoginPage;
