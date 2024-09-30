// components/SignupForm.js
'use client';
import React from 'react';
import styles from '../styles/Home.module.css';

const SignupForm = () => (
    <div className={styles.formContainer}>
        <h2>회원가입</h2>
        <form>
            <input type="text" placeholder="이름" required />
            <input type="email" placeholder="이메일" required />
            <input type="password" placeholder="비밀번호" required />
            <button type="submit">회원가입</button>
        </form>
    </div>
);

export default SignupForm;
