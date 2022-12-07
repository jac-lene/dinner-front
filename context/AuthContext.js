import { createContext, useState, useEffect } from 'react';
// import jwt_decode from 'jwt-decode';

export const AuthContext = createContext();

export default AuthProvider = ({children}) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

