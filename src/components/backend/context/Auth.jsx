import { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
    const userInfo = localStorage.getItem("userInfo");
    const [user, setUser] = useState(userInfo ? JSON.parse(userInfo) : null);

    const login = (data) => setUser(data);

    const logout = () => {
        localStorage.removeItem("userInfo");
        setUser(null);
    }
    return <authContext.Provider value={{user, login, logout}}>
        {children}
        </authContext.Provider>;
};