import React from 'react';

const Highlight = ({ sentence, word, show }) => {
  const getHighlightedText = (sentence, word) => {
    const parts = sentence.split(
      new RegExp(`(${word})`, 'gi')
    );
    return (
      <span>
        {parts.map((part, i) => (
          <span
            key={i}
            style={{
              fontWeight: 'bold',
              color: '#000',
              textTransform: 'uppercase',
            }}>
            if(part.toLowerCase() === word.toLowerCase())
            {<div>{part}</div>}else if ( part.toLowerCase()
            !== word.toLowerCase())
            {alert('Cannot highlight word in sentence')}
          </span>
        ))}
      </span>
    );
  };

  return (
    show && (
      <div>
        <h3>{sentence}</h3>
        {getHighlightedText(sentence, word)}
      </div>
    )
  );
};

export default Highlight;

// part.toLowerCase() === word.toLowerCase()
// ? {
//     fontWeight: 'bold',
//     color: '#FFFF00',
//     textTransform: 'uppercase',
//   }
// : {
//   part.toLowerCase() !== word.toLowerCase(){
//   alert("Cannot highlight word in sentence")
// }}
