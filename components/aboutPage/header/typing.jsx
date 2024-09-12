'use client' // wont work bc of await or smthn
import { useState, useEffect } from 'react';
import styles from './header.module.css';

// Sorry to the poor dev working on this years down the line, today is July 29, 2024 
//'#FBC300' is the color of the 'KAIBIGANG PILIPINO ' in figma

const TypingEffect = ({ words }) => {
  const charTypeSpeed = 100; // typing speed
  // higher number = slower typing
  const charDeleteSpeed = 125; // how quick a char deletes
  // higher number = slower deleting
  const wordDelay = 1300;
   // higher number = slower delay
  const [displayedText, setDisplayedText] = useState('');
  const [idx, setIDX] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currWordIndex, setCurrentWordIndex] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);
  useEffect(() => {
    if ( !isDeleting   && idx < words[currWordIndex].length) { // more shit to type
      const timeout = setTimeout( () => {
        setDisplayedText(displayedText + words[ currWordIndex ][ idx ]);
        setIDX(idx + 1);
      }, 
      charTypeSpeed);
      return ( ) => clearTimeout( timeout );
    } 
    else if ( isDeleting && idx > 0 ) {
      const timeout = setTimeout(  () => {
        setDisplayedText( displayedText.slice( 0, -1 ) ); // do not use substring here! it breaks for some godforsaken reasonn
          setIDX(idx - 1);
      }, charDeleteSpeed);
      return () => clearTimeout(timeout);
    } 
    else if ( !isDeleting && idx === words[ currWordIndex ].length ) {
      if (currWordIndex === words.length - 1) {
        setIsTypingDone(true);
        //  it's the last word, do nothing (let it stay) ELSE DO smthn else
        return;
      }
    else {
        const pauseTimeout = setTimeout(() => {
          setIsDeleting(true); // Start deleting the text
        }, wordDelay); // Delay before starting to delete
        return () => clearTimeout(pauseTimeout);
      }
    }
    else if ( isDeleting  &&  idx === 0 ) {
      setIsDeleting( false );

      setCurrentWordIndex( (currWordIndex + 1)  );
    }
  }, [displayedText, idx, isDeleting, words, currWordIndex]);

  const textColor = words[ currWordIndex ] === words[ words.length - 1 ] ? '#FBC300' : 'black'; // very specific color from figma
  return <div className={styles.typeWriter} 
    style = {
      {  
        color: textColor,
        borderRight:" 100px",
      } 
    }>
      <strong>{displayedText}</strong>
  
  </div>;


};

const App = () => {
  const words = ['home.', '', 'friendship.', ' ', 'kaibigang pilipino.'];
  // kaibigang pilipino MUST be the last word. it's the only one with a different color.
  // add blanks (i.e, the '') for delays,
  // keep in mind you cannot change teh above word delay without changing ALL
  // so use them for emphasis
  return <TypingEffect words={words} />;
};

export default App;
