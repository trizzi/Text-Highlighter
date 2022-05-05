import React, { useEffect, useState } from 'react';

const splitSentence = (sentence, word) =>
  sentence.split(new RegExp(`(${word})`, 'gi'));

const Highlight = ({ sentence, word, show }) => {
  const [parts, setParts] = useState([]);
  const [displayText, setDisplayText] = useState(show);

  useEffect(() => {
    setParts(splitSentence(sentence, word));
  }, [sentence, word]);

  useEffect(() => {
    if (show) {
      const partsWithWord = parts.filter(
        (part) => part.toLowerCase() === word.toLowerCase()
      );
      console.log('wwwww', partsWithWord);
      if (partsWithWord.length === 0) {
        setDisplayText(false);
        alert('Cannot highlight word in sentence.');
      } else if (partsWithWord.length > 2) {
        alert('Too many occurrences to be highlighted');
        setDisplayText(false);
      } else {
        setDisplayText(show);
      }
    }
  }, [parts, word, show]);

  return (
    displayText && (
      <div className='highlighted-text'>
        <h3>
          {parts.map((part, i) => (
            <span
              key={i}
              style={
                part.toLowerCase() === word.toLowerCase()
                  ? {
                      fontWeight: 'bold',
                      color: '#FFFF00',
                      textTransform: 'uppercase',
                    }
                  : {}
              }>
              {part}
            </span>
          ))}
        </h3>
      </div>
    )
  );
};

export default Highlight;
