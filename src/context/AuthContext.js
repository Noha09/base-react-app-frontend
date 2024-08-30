import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe usarse dentro de un AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false);
    const [mensajeError, setMensajeError] = useState('');
    const [role, setRole] = useState('');

    const login = async (datos) => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', datos, { withCredentials: true });

            if (response.data.ok) {
                setUser(response.data);
                setIsAuthenticated(true);
                setErrorLogin(false);
                setMensajeError('');
                setRole(response.data.role);
            } else {
                setUser(null);
                setIsAuthenticated(false);
                setErrorLogin(true);
                setMensajeError('Usuario o password incorrecto');
                setRole('');
                return;
            }
        } catch (error) {
            setUser(null);
            setIsAuthenticated(false);
            setErrorLogin(true);
            setMensajeError('Usuario o password incorrecto');
            setRole('');
            console.error(error.message);
        }
    };
    
    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        setRole('');
    };

    return (
        <AuthContext.Provider value={{
            login,
            isAuthenticated,
            errorLogin,
            mensajeError,
            user,
            logout,
            role
        }}>
            {children}
        </AuthContext.Provider>
    );
};