import React, { createContext, useState, useContext } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState(1987);
  const pages = [1987, 1992, 1995, 2010, 2018, 2020, 2023];

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

  const navigateToPage = (year) => {
    if (pages.includes(year)) {
      setPage(year);
    }
  };

  return (
    <PageContext.Provider value={{ page, navigateToNextPage, navigateToPreviousPage, navigateToPage, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);