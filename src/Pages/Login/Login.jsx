import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
    const {handleLoginUser} = useAuth()
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        handleLoginUser(email, password)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(location?.state ? location?.state : '/')
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    
    return (
        <div>
            Login
        </div>
    );
};

export default Login;