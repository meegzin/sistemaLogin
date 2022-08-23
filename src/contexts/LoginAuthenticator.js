import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const LoginAuthenticatorProvider = ({ children }) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_bd");
    
        if (userToken && usersStorage) {
          const hasUser = JSON.parse(usersStorage)?.filter(
            (user) => user.username === JSON.parse(userToken).username
          );
    
          if (hasUser) setUser(hasUser[0]);
        }
      }, []);
    
      const login = (username, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));
    
        const hasUser = usersStorage?.filter((user) => user.username === username);
    
        if (hasUser?.length) {
          if (hasUser[0].username === username && hasUser[0].password === password) {
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem("user_token", JSON.stringify({ username, token }));
            setUser({ username, password });
            return;
          } else {
            return "Usuário ou senha incorretos";
          }
        } else {
          return "Usuário não cadastrado";
        }
      };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem("user_token")
    }

    return (
        <AuthContext.Provider
            value={{user, signed: !!user, login, signOut}}
        >
            {children}
        </AuthContext.Provider>
    )
}