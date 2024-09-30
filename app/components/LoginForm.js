// components/LoginForm.js
'use client';
import React from 'react';
import styles from '../styles/Home.module.css';

const LoginForm = () => (
    <div className={styles.formContainer}>
        <h2>로그인</h2>
        <form>
            <input type="email" placeholder="이메일" required />
            <input type="password" placeholder="비밀번호" required />
            <button type="submit">로그인</button>
        </form>
    </div>
);

export default LoginForm;
