import React, { createContext, useState } from 'react';

interface AuthContextData {
  isAuthenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
}

export const AuthContext = createContext<AuthContextData>({
  isAuthenticated: false,
  setAuthenticated: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
