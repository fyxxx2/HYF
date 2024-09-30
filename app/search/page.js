// /app/search/page.js
'use client';

import React from 'react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';
import EmotionSlider from '../components/EmotionSlider';
import Footer from '../components/Footer';
import styles from '../styles/search.module.css';

const SearchPage = () => {
  return (
    <div className={styles.searchPage}>
      <Header />
      <main className={styles.mainContent}>
        <SearchInput />
        <EmotionSlider />
        <br></br>
        <SearchResults />
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
