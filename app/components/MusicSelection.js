// /components/MusicSelection.js
'use client';
import React from 'react';
import styles from '../styles/upload.module.css';

const MusicSelection = () => {
  return (
    <div className={styles.uploadSection}>
      <h3>음악 선택</h3>
      <div className={styles.musicSearch}>
        <input type="text" id="music-search" placeholder="음악 검색..." />
      </div>
      <div className={styles.musicPlaylist}>
        <h4>추천 곡</h4>
        <ul id="music-list">
          <li>추천 곡 1</li>
          <li>추천 곡 2</li>
          <li>추천 곡 3</li>
        </ul>
      </div>
    </div>
  );
};

export default MusicSelection;
