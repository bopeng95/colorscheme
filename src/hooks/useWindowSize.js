import { useState, useEffect } from 'react';

import { display } from 'global-styles';

const sortedDisplays = Object.keys(display)
  .map((k) => [k, display[k]])
  .sort((a, b) => a[1] - b[2]);

const calculateWidth = (width) => {
  for (let i = 0; i < sortedDisplays.length; i += 1) {
    const [k, v] = sortedDisplays[i];
    if (width >= v) return k;
  }
  return 'phone';
};

export default () => {
  const windowSize = calculateWidth(window.innerWidth);
  const [size, setSize] = useState(windowSize);

  const resize = () => {
    const current = calculateWidth(window.innerWidth);
    if (current && current !== size) setSize(current);
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  });

  return [size];
};
