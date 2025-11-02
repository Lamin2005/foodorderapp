import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setloggedInUser] = useState(null);
  const [isLoading, setLoading] = useState(true);


  //Get userList from localStorage
  useEffect(() => {
    const userlist = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(userlist);
  }, []);

  //Get loginUser from sessionStorage
  useEffect(() => {
    const initializeUser = () => {
      const storedUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

      if (storedUser) {
        setloggedInUser(storedUser);
      }

      setLoading(false);
    };

    initializeUser();
  }, []);
 
  const login = (userData) => {
    setloggedInUser(userData);
    sessionStorage.setItem("loggedInUser", JSON.stringify(userData));
  };

  const logout = () => {
    setloggedInUser(null);
    sessionStorage.removeItem("loggedInUser");
  };

  const value = {
    users,
    setUsers,
    loggedInUser,
    setloggedInUser,
    login,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
