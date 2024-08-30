import { useEffect, useState } from "react";

import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { FaUnlock,FaUserLarge } from "react-icons/fa6";

export default function Login() {
    const { isAuthenticated, login, errorLogin, mensajeError, role } = useAuth();
    const navigate = useNavigate();

    const [datos, setDatos] = useState({
        email: '',
        password: ''
    });

    const manejarSubmit = async e => {
        e.preventDefault();
        login(datos);
    };

    const manejarDatos = e => {
        setDatos({ ...datos, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if(isAuthenticated){
            if(role === 'Admin'){
                navigate('/admin');
            }else if(role === 'Usuario'){
                navigate('/usuario');
            }
        }
    }, [isAuthenticated]);

    return (
        <form className="position-absolute top-50 start-50 translate-middle mt-1" onSubmit={manejarSubmit}>
            <div className="card border-dark mb-3">
                <div className="card-header text-bg-dark"><h2>Iniciar sesión</h2></div>
                <div className="card-body text-dark">
                    <div className="input-group mb-3">
                        <button type="button" className="btn btn-outline-dark" disabled><FaUserLarge /></button>
                        <input type="text" className="form-control" placeholder="Usuario o Email" name="email" required onChange={manejarDatos} /><br />
                    </div>
                    <div className="input-group mb-3">
                        <button type="button" className="btn btn-outline-dark" disabled><FaUnlock /></button>
                        <input type="password" className="form-control" placeholder="Password" name="password" required onChange={manejarDatos} />
                    </div>
                    {errorLogin && <p style={{color: 'red'}}>{mensajeError}</p> }
                    <button type="submit" className="btn btn-dark">Entrar</button>
                </div>
            </div>
        </form>
    );
};