import React, { createContext, useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import api from "./lib/api";

export const Context = createContext({
  isAuthorized: false,
});

const AppWrapper = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  const fetchCurrentUser = async () => {
    try {
      const response = await api.get("/user/getuser");
      setUser(response.data.user);
      setIsAuthorized(true);
    } catch (error) {
      setUser({});
      setIsAuthorized(false);
    } finally {
      setIsLoadingAuth(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const contextValue = useMemo(
    () => ({
      isAuthorized,
      setIsAuthorized,
      user,
      setUser,
      isLoadingAuth,
      fetchCurrentUser,
    }),
    [isAuthorized, user, isLoadingAuth]
  );

  return (
    <Context.Provider value={contextValue}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);