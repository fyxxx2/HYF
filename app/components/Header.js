'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Home.module.css';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.menuBtn') && !e.target.closest(`.${styles.dropdownMenu}`)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleSearchPageNavigation = () => {
        router.push('/search');
    };

    const handleProfilePageNavigation = () => {
        router.push('/profile');
    };

    const handlePostPageNavigation = () => {
        router.push('/post');
    };

    const handleUploadPageNavigation = () => {
        router.push('/upload');
    };

    

    const handleLogoClick = () => {
        router.push('/');
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <button className={styles.menuBtn} onClick={toggleDropdown}>메뉴</button>
                <div className={`${styles.dropdownMenu} ${dropdownOpen ? styles.show : ''}`}>
                <button className={styles.dropdownBtn} onClick={handleSearchPageNavigation}>검색</button>
                    <button className={styles.dropdownBtn} onClick={handleProfilePageNavigation}>프로필</button>
                    <button className={styles.dropdownBtn} onClick={handlePostPageNavigation}>게시글</button>
                    <button className={styles.dropdownBtn} onClick={handleUploadPageNavigation}>업로드</button>
                </div>
            </div>
            <div className={styles.headerCenter}>
                <span className={styles.logo} onClick={handleLogoClick}>로고</span>
            </div>
            <div className={styles.headerRight}>
                <button className={styles.searchBtn}>검색</button>
                <button className={styles.profileBtn}>프로필</button>
            </div>
        </header>
    );
};

export default Header;
