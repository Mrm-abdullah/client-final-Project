import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({children}) => {
    const  {user, loading} = useAuth();
    const location = useLo  cation();
    
    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoutes;