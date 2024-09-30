'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileContent from '../components/ProfileContent';
import styles from '../styles/profile.module.css';

const ProfilePage = () => {
    const user = {
        name: '사용자 이름',
        bio: '짧은 자기소개',
        profileImage: 'https://via.placeholder.com/100',
        followers: 120,
        following: 180,
        posts: 35
    };

    const highlights = [
        { imageUrl: 'https://via.placeholder.com/70', title: '하이라이트' },
        { imageUrl: 'https://via.placeholder.com/70', title: '하이라이트' },
        { imageUrl: 'https://via.placeholder.com/70', title: '하이라이트' }
    ];

    const posts = [
        { imageUrl: 'https://via.placeholder.com/300', content: '게시물 내용' },
        { imageUrl: 'https://via.placeholder.com/300', content: '게시물 내용' },
        { imageUrl: 'https://via.placeholder.com/300', content: '게시물 내용' },
        { imageUrl: 'https://via.placeholder.com/300', content: '게시물 내용' }
    ];

    return (
        <div className={styles.profilePage}>
            <Header />
            <ProfileContent user={user} highlights={highlights} posts={posts} />
            <Footer />
        </div>
    );
};

export default ProfilePage;
