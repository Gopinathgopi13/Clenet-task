'use client'
import { createContext } from 'react';
const HighContrastContext = createContext({
    isHighContrast: false,
    toggleHighContrast: () => {},
  });

export default HighContrastContext;
