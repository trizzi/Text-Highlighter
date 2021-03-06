import React, { Fragment } from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const Search = ({ setSentence, setWord, onHighlight }) => {
  const onClick = (e) => {
    e.preventDefault();
    onHighlight();
  };

  const onSentenceChange = (e) => {
    setSentence(e.target.value);
    console.log('sentence', e.target.value);
  };

  const onWordChange = (e) => {
    setWord(e.target.value);
    console.log('word ', e.target.value);
  };

  return (
    <Fragment>
      <h1>Text Highlighter</h1>
      <form data-testid='search' className='form'>
        <input
          type='text'
          className='input-1'
          placeholder='Type a sentence (max 100)'
          maxLength='100'
          required
          onChange={onSentenceChange}
        />
        <input
          type='text'
          required
          className='input-2'
          placeholder='Type a word to highlight it'
          onChange={onWordChange}
        />
        <Button text='Highlight' onClick={onClick} />
      </form>
    </Fragment>
  );
};

Search.protoType = {
  setSentence: PropTypes.func.isRequired,
  setWord: PropTypes.func.isRequired,
  onHighlight: PropTypes.func.isRequired,
};

export default Search;
