import { useState } from 'react';

export default function usePaginationBoundaries(pagesNumber: number) {
  const [boundaries, setBoundaries] = useState({
    left: 0,
    right: 3,
  });

  const moveRight = () => {
    if (boundaries.right >= pagesNumber - 1) return;
    setBoundaries({
      right: boundaries.right + 1,
      left: boundaries.left + 1,
    });
  };
  const moveLeft = () => {
    if (boundaries.left == 0) return;
    setBoundaries({
      right: boundaries.right - 1,
      left: boundaries.left - 1,
    });
  };

  return {
    boundaries,
    moveRight,
    moveLeft,
  };
}
