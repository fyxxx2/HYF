// /components/SearchResults.js
'use client';
import React from 'react';
import styles from '../styles/search.module.css';

const SearchResults = () => {
  return (
    <div className={styles.resultsContainer}>
      <h3>검색 결과</h3>
      <div>결과 1</div>
      <div>결과 2</div>
      <div>결과 3</div>
      {/* 검색 결과 항목들 */}
    </div>
  );
};

export default SearchResults;
