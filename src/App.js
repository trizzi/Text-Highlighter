import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './component/Search';
import Highlight from './component/Highlight';

function App() {
  const [sentence, setSentence] = useState('');
  const [word, setWord] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sentence === '') {
      setShow(false);
    }
  }, [sentence]);

  // useEffect(() => {
  //   if (!!sentence) {
  //     setShow(false);
  //   }
  // }, [sentence]);

  const onHighlight = () => {
    setShow(true);
  };

  return (
    <div className={`app app-light`} data-testid='app'>
      <Search
        setSentence={setSentence}
        setWord={setWord}
        onHighlight={onHighlight}
      />
      <Highlight
        sentence={sentence}
        word={word}
        show={show}
      />
    </div>
  );
}

export default App;
