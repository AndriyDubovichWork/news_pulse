import React from 'react';

function randomNumStrFormat(min: number, max: number) {
  const num = Math.floor(Math.random() * (max - min + 1) + min);

  return Intl.NumberFormat('en', { notation: 'compact' }).format(num);
}

export default randomNumStrFormat;
