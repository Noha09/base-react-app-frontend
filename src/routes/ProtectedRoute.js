import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({children, acceso} ) {
    const { isAuthenticated, role } = useAuth();
    if(!isAuthenticated){
        return <Navigate to='/' replace />
    }else if(role === acceso){
      return children;
    }
};

export default ProtectedRoute;