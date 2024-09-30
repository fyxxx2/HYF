// app/page.js
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import styles from './styles/Home.module.css';

const Home = () => (
    <main className={styles.main}>
        <div className={styles.formWrapper}>
            <SignupForm />
            <LoginForm />
        </div>
    </main>
);

export default Home;
