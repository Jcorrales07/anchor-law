// src/contexts/HeaderHeightContext.tsx
import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface HeaderHeightContextType {
  headerHeight: number;
  setHeaderHeight: (height: number) => void;
}

const HeaderHeightContext = createContext<HeaderHeightContextType>({
  headerHeight: 800,
  setHeaderHeight: () => {},
});

export const useHeaderHeight = () => {
  const context = useContext(HeaderHeightContext);
  if (!context) {
    throw new Error('useHeaderHeight must be used within HeaderHeightProvider');
  }
  return context;
};

export const HeaderHeightProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(800);

  return (
    <HeaderHeightContext.Provider value={{ headerHeight, setHeaderHeight }}>
      {children}
    </HeaderHeightContext.Provider>
  );
};