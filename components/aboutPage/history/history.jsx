'use client';

import React, { useState } from 'react';
import styles from './history.module.css'
import Page1987 from './pages/Page1987';
import Page1992 from './pages/Page1992';
import Page1995 from './pages/Page1995';
import Page2010 from './pages/Page2010';
import Page2017 from './pages/Page2017';
import Page2020 from './pages/Page2020';
import Page2023 from './pages/Page2023';

const History = () => {
  const [page, setPage] = useState(1987);
  const pages = [1987, 1992, 1995, 2010, 2018, 2020, 2023]

  const renderPage = () => {
    switch (page) {
      case 1987:
        return <Page1987 />;
      case 1992:
        return <Page1992 />;
      case 1995:
        return <Page1995 />;
      case 2010:
        return <Page2010 />;
      case 2017:
        return <Page2017 />;
      case 2020:
        return <Page2020 />;
      case 2023:
        return <Page2023 />;
      default:
        return <Page1987 />;
    }
  };

  const navigateToNextPage = () => {
    const currentIndex = pages.indexOf(page);
    if (currentIndex < pages.length - 1) {
      setPage(pages[currentIndex + 1]);
    }
  };

  const navigateToPreviousPage = () => {
    const currentIndex = pages.indexOf(page);
    if (currentIndex > 0) {
      setPage(pages[currentIndex - 1]);
    }
  };

  return (
    <div className={styles.historyContainer}>
      <h1>explore our history</h1>
      <div className={styles.content}>
      {renderPage()}
      <nav className={styles.timeline}>
        <div className={styles.line}></div>
        <div className={styles.stars}>
          <span onClick={() => setPage(1987)} className={page === 1987 ? styles.active : ''}>&#9733;</span>
          <span onClick={() => setPage(1992)} className={page === 1992 ? styles.active : ''}>&#9733;</span>
          <span onClick={() => setPage(1995)} className={page === 1995 ? styles.active : ''}>&#9733;</span>
          <span onClick={() => setPage(2010)} className={page === 2010 ? styles.active : ''}>&#9733;</span>
          <span onClick={() => setPage(2017)} className={page === 2017 ? styles.active : ''}>&#9733;</span>
          <span onClick={() => setPage(2020)} className={page === 2020 ? styles.active : ''}>&#9733;</span>
          <span onClick={() => setPage(2023)} className={page === 2023 ? styles.active : ''}>&#9733;</span>
        </div>
      </nav>
        
      </div>
      
      <div className={styles.arrows}>
      {page !== 1987 && (
          <span onClick={navigateToPreviousPage}>&#8592;</span>
        )}
        {page !== 2023 && (
          <span onClick={navigateToNextPage}>&#8594;</span>
        )}
      </div>
    </div>
  );
};

export default History;