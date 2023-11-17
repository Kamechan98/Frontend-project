// UserContext.tsx
import React, { createContext, useContext, useEffect, useState, PropsWithChildren } from 'react';

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  fetchUser: () => void
}

const defaultState: UserContextType = {
  user: null,
  setUser: () => {},
  fetchUser: () => {}
}

const UserContext = createContext<UserContextType>(defaultState);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      // Check if a user is authenticated (e.g., by checking for an authentication token)
      const token = localStorage.getItem('TOKEN');

      if (token) {
        // If authenticated, fetch user data
        const response = await fetch('http://localhost:9999/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("User fetched", data)
          setUser(data.user);
        } else {
          // Handle unauthorized or other error responses
          console.error('Error fetching user:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
