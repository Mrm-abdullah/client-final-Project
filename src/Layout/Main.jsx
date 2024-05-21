import { Outlet, useLocation } from "react-router-dom";
import Navber from "../Pages/Shared/Navber";
import Footer from "../Pages/Shared/Footer";


const Main = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div className="max-w-screen-xl mx-auto">
            {noHeaderFooter || <Navber></Navber>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;