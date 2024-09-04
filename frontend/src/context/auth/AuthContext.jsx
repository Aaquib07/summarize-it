import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const storedAuthState = localStorage.getItem('isAuthenticated')
        if (storedAuthState === 'true')
            setIsAuthenticated(true)
    }, [])

    const login = () => {
        setIsAuthenticated(true)
        localStorage.setItem('isAuthenticated', 'true');
    }

    const logout = () => {
        setIsAuthenticated(false)
        localStorage.clear()
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}