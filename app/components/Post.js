// /components/Post.js
'use client';
import React, { useState } from 'react';
import styles from '../styles/post.module.css';

const Post = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { src: 'https://via.placeholder.com/600x280.png?text=게시글+1', alt: '게시글 1', text: '게시글 내용 1' },
    { src: 'https://via.placeholder.com/600x280.png?text=게시글+2', alt: '게시글 2', text: '게시글 내용 2' },
    { src: 'https://via.placeholder.com/600x280.png?text=게시글+3', alt: '게시글 3', text: '게시글 내용 3' },
    { src: 'https://via.placeholder.com/600x280.png?text=게시글+4', alt: '게시글 4', text: '게시글 내용 4' },
    { src: 'https://via.placeholder.com/600x280.png?text=게시글+5', alt: '게시글 5', text: '게시글 내용 5' },
    { src: 'https://via.placeholder.com/600x280.png?text=게시글+6', alt: '게시글 6', text: '게시글 내용 6' },
    { src: 'https://via.placeholder.com/600x280.png?text=게시글+7', alt: '게시글 7', text: '게시글 내용 7' },
    { src: 'https://via.placeholder.com/600x280.png?text=게시글+8', alt: '게시글 8', text: '게시글 내용 8' },
    { src: 'https://via.placeholder.com/600x280.png?text=게시글+9', alt: '게시글 9', text: '게시글 내용 9' },
    { src: 'https://via.placeholder.com/600x280.png?text=게시글+10', alt: '게시글 10', text: '게시글 내용 10' }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className={styles.postContainer}>
      <div className={styles.post}>
        <div className={styles.postInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <div key={index} className={styles.postItem}>
              <img src={item.src} alt={item.alt} />
              <div className={styles.text}>{item.text}</div>
            </div>
          ))}
        </div>
        <button className={`${styles.nav} ${styles.left}`} onClick={handlePrev}>←</button>
        <button className={`${styles.nav} ${styles.right}`} onClick={handleNext}>→</button>
      </div>
    </div>
  );
};

export default Post;
