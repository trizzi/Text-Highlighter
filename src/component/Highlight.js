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
      </span>
    );
  };

  return (
    show && (
      <div className='highlighted-text'>
        <h3>{sentence}</h3>
        {getHighlightedText(sentence, word)}
      </div>
    )
  );
};

export default Highlight;

// if(part.toLowerCase() === word.toLowerCase())
// {<div>{part}</div>}else if ( part.toLowerCase()
// !== word.toLowerCase())
// {alert('Cannot highlight word in sentence')}
