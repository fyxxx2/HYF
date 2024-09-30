// /components/ProfileContent.js
'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/profile.module.css';

const ProfileContent = ({ user }) => {
  // 감정 하이라이트 데이터
  const highlights = [
    { title: '행복', imageUrl: '/images/happy-highlight.jpg' },
    { title: '슬픔', imageUrl: '/images/sad-highlight.jpg' },
    { title: '기쁨', imageUrl: '/images/joy-highlight.jpg' },
  ];

  // 예시 게시물 데이터 (각 게시물에 감정 해시태그 포함)
  const posts = [
    { imageUrl: '/images/post1.jpg', content: '행복한 날', hashtags: ['행복'] },
    { imageUrl: '/images/post2.jpg', content: '슬픈 기억', hashtags: ['슬픔'] },
    { imageUrl: '/images/post3.jpg', content: '즐거운 순간', hashtags: ['기쁨'] },
    { imageUrl: '/images/post4.jpg', content: '또 다른 행복', hashtags: ['행복'] },
    { imageUrl: '/images/post5.jpg', content: '기쁜 소식', hashtags: ['기쁨'] },
    { imageUrl: '/images/post6.jpg', content: '우울한 하루', hashtags: ['슬픔'] },
    // 더 많은 예시 게시물 추가 가능
  ];

  // 기본적으로 첫 번째 하이라이트를 선택된 상태로 설정
  const [selectedHighlight, setSelectedHighlight] = useState(highlights[0]);

  // 선택된 하이라이트에 맞게 게시물을 필터링하는 함수
  const filteredPosts = selectedHighlight
    ? posts.filter(post => post.hashtags.includes(selectedHighlight.title))
    : posts;

  // 하이라이트 클릭 이벤트 핸들러
  const handleHighlightClick = (highlight) => {
    setSelectedHighlight(highlight);
  };

  return (
    <main className={styles.profileContainer}>
      {/* Profile Header */}
      <div className={styles.profileHeader}>
        <img src={user.profileImage} alt="프로필 사진" />
        <div className={styles.profileInfo}>
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
          <div className={styles.followersStats}>
            <div>
              <span>{user.followers}</span> 팔로워
            </div>
            <div>
              <span>{user.following}</span> 팔로잉
            </div>
            <div>
              <span>{user.posts}</span> 게시물
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className={styles.highlightsContainer}>
        {highlights.map((highlight, index) => (
          <div
            className={`${styles.highlight} ${selectedHighlight === highlight ? styles.activeHighlight : ''}`} // 선택된 하이라이트에 스타일 추가
            key={index}
            onClick={() => handleHighlightClick(highlight)} // 클릭 이벤트 추가
          >
            <img src={highlight.imageUrl} alt={`${highlight.title} 하이라이트 이미지`} />
            <div className={styles.highlightOverlay}>{highlight.title}</div>
          </div>
        ))}
      </div>

      {/* Posts (격자 모양) */}
      <div className={styles.postsContainer}>
        {filteredPosts.map((post, index) => ( // 필터링된 게시물만 렌더링
          <div className={styles.post} key={index}>
            <img src={post.imageUrl} alt="게시물 이미지" />
            <div className={styles.postOverlay}>{post.content}</div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProfileContent;
