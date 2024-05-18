import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Navber = () => {
    const { user, handleLogoutUser } = useAuth()

    const handleLogout = () => {
        handleLogoutUser()
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // console.log('logout error', error);
            });
    }

    const Navbers = <>
        <li><NavLink to="/">Home</NavLink></li>
        {
            user ? <>
                <li><Link onClick={handleLogout} >Log out</Link></li>
            </>
                :
                <li> <NavLink to="/login">Login</NavLink></li>
        }
    </>
    return (
        <div>
            {Navbers}
        </div>
    );
};

export default Navber;