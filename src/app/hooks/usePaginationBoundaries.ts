import { useState, useEffect } from 'react';

export default function usePaginationBoundaries(
  pagesNumber: number,
  shownElements: number
) {
  const [boundaries, setBoundaries] = useState({
    left: 0,
    right: shownElements - 1,
  });
  // update boundaries
  useEffect(() => {
    setBoundaries({ left: 0, right: shownElements - 1 });
  }, [shownElements]);
  const [disabled, setDisabled] = useState({
    left: true,
    right: false,
  });
  // update disabled buttons
  useEffect(() => {
    let [left, right] = [false, false];

    if (boundaries.left === 0) left = true;

    if (boundaries.right >= pagesNumber - 1 && pagesNumber) right = true;

    setDisabled({
      left,
      right,
    });
  }, [boundaries, pagesNumber]);

  const moveEnd = () => {
    setBoundaries({
      right: pagesNumber - 1,
      left: pagesNumber - shownElements,
    });
  };
  const moveStart = () => {
    setBoundaries({
      right: 3,
      left: 0,
    });
  };

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
    disabled,
    moveRight,
    moveLeft,
    moveStart,
    moveEnd,
  };
}
