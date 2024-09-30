// /app/upload/page.js
'use client';
import React from 'react';
import Header from '../components/Header';
import PhotoUpload from '../components/PhotoUpload';
import MusicSelection from '../components/MusicSelection';
import PostCreation from '../components/PostCreation';
import Footer from '../components/Footer';
import styles from '../styles/upload.module.css';

const UploadPage = () => {
  return (
    <div className={styles.uploadPage}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.uploadContainer}>
          <PhotoUpload />
          <MusicSelection />
        </div>
        <PostCreation />
      </main>
      <Footer />
    </div>
  );
};

export default UploadPage;
