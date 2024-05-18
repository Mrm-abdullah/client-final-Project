import { useContext } from "react";
import { AuthContext } from "../Providers/AauthProviders";


const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default useAuth;