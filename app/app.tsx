import React, { useState, useEffect } from 'react';
import Nav from '../components/nav/nav';
import Home from '../app/page'; 
import About from '../app/about/page'; 
import Events from '../app/events/page'; 

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleNavigation = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  return (
    <div className="App">
      <Nav />
      <nav>
        <a href="/" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>Home</a>
        <a href="/about" onClick={(e) => { e.preventDefault(); handleNavigation('/about'); }}>About</a>
        <a href="/events" onClick={(e) => { e.preventDefault(); handleNavigation('/events'); }}>Events</a>
      </nav>
      {currentPath === '/' && <Home />}
      {currentPath === '/about' && <About />}
      {currentPath === '/events' && <Events />}
    </div>
  );
};

export default App;
