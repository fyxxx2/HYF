// /components/PhotoUpload.js
'use client';
import React, { useState } from 'react';
import styles from '../styles/upload.module.css';

const PhotoUpload = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhoto(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.uploadSection}>
      <h3>사진 업로드</h3>
      <div id="photo-preview" className={styles.photoPreview}>
        {photo ? <img src={photo} alt="사진 미리보기" /> : '사진을 선택하세요'}
      </div>
      <input
        type="file"
        id="photo-upload"
        accept="image/*"
        onChange={handlePhotoUpload}
      />
    </div>
  );
};

export default PhotoUpload;
