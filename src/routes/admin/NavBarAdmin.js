import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import 'bootstrap/js/dist/dropdown.js';

import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function NavBarAdmin() {
    const { logout } = useAuth();
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/admin' className="navbar-brand">Logo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/maestros' className="nav-link active">Uno</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dashboard
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Uno</a></li>
                                <li><a className="dropdown-item" href="#">Dos</a></li>
                                <li><a className="dropdown-item" href="#">Tres</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <span className="navbar-text">
                    <button data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Cerrar sesión" title="Cerrar sesión" className="btn btn-outline-dark" onClick={logout}><FaArrowRightFromBracket /></button>
                </span>
            </div>
        </nav>
    );
};