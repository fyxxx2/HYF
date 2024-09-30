// /components/SearchInput.js

import React from 'react';
import styles from '../styles/search.module.css';

const SearchInput = () => {
  return (
    <div className={styles.searchContainer}>
      <input type="text" className={styles.searchInput} placeholder="검색어를 입력하세요..." />
    </div>
  );
};

export default SearchInput;
