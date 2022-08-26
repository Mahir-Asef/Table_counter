import { useLocation,useNavigate,Navigate } from 'react-router-dom';
import React,{useState} from 'react';

function PrivateRoute({ children }){
    const [auth,setAuth]=useState(false)
    let location = useLocation();
    let navigate = useNavigate();
    if(!auth){
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
}
export default PrivateRoute;