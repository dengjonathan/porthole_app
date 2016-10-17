import React from 'react';

import Word form './Word';

const CurrentWord = ({word}) => (
  <div className="currentWord">
    <Word word={word} />
  </div>
);

export default CurrentWord;