import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from './routes/ProtectedRoute.js';
import InicioAdmin from './routes/admin/InicioAdmin.js';
import Login from './routes/Login.js';

import { AuthProvider } from './context/AuthContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> 
        <Routes>
          <Route path = "/*" element = {<Login />} />
          {/****************** ROUTES DEL ADMIN *******************/}
          <Route path = '/admin' element = {
            <ProtectedRoute
              acceso = "Admin"
            >
              <InicioAdmin />
            </ProtectedRoute>
          }>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);