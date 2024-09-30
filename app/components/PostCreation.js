// /components/PostCreation.js
'use client';
import React from 'react';
import styles from '../styles/upload.module.css';

const PostCreation = () => {
  const handleHashtagClick = (e) => {
    const textarea = document.querySelector('textarea');
    textarea.value += `${e.target.textContent} `;
  };

  return (
    <div className={styles.uploadPosting}>
      <h3>글 작성</h3>
      <textarea placeholder="글을 작성하세요..."></textarea>
      <div className={styles.hashtags}>
        <button onClick={handleHashtagClick}>#기쁨</button>
        <button onClick={handleHashtagClick}>#슬픔</button>
        <button onClick={handleHashtagClick}>#분노</button>
        <button onClick={handleHashtagClick}>#사랑</button>
        <button onClick={handleHashtagClick}>#행복</button>
      </div>
      <div className={styles.postuploadBtn}>
        <button>업로드</button>
      </div>
    </div>
  );
};

export default PostCreation;
