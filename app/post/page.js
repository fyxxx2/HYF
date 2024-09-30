// /app/post/page.js

import React from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import Footer from '../components/Footer';
import styles from '../styles/post.module.css';

const PostPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.top}>
          <div className={styles.projector}></div>
        </div>
        <Post />
        <div id="upload" className={styles.uploadContainer}>
          <button className={styles.uploadBtn}>업로드</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostPage;
