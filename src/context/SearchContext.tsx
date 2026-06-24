import React, { createContext, useContext, useState } from 'react';

interface SearchContextType {
  isSearchOpen: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toggleSearch: (isOpen?: boolean) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSearch = (isOpen?: boolean) => {
    setIsSearchOpen((prev) => (isOpen !== undefined ? isOpen : !prev));
    if (isOpen === false) {
      setSearchQuery('');
    }
  };

  return (
    <SearchContext.Provider
      value={{
        isSearchOpen,
        searchQuery,
        setSearchQuery,
        toggleSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
