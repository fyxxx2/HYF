// /components/EmotionSlider.js
'use client';
import React from 'react';
import styles from '../styles/search.module.css';

const EmotionSlider = () => {
  return (
    <div className={styles.emotionSlider}>
      <button>기쁨</button>
      <button>슬픔</button>
      <button>분노</button>
      <button>사랑</button>
      <button>행복</button>
      <button>두려움</button>
      <button>놀라움</button>
      <button>평온</button>
      <button>긴장</button>
      <button>희망</button>
      <button>절망</button>
      <button>감사</button>
      <button>혼란</button>
      <button>자신감</button>
      <button>애정</button>
      {/* 더 많은 감정 목록 버튼들 */}
    </div>
  );
};

export default EmotionSlider;
