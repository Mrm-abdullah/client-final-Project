import useAuth from "../../Hooks/useAuth";


const Register = () => {
    const {handleCreateUser} = useAuth();

    const createUser =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
         console.log(name, email, password);

        // dynamicaly from korar jonno
        // console.log(e.currentTarget);
        // const form = new FormData(e.currentTarget)
        // console.log(form);
        // console.log(form.get('password'));

        // validation korar jonno

        if (password.length<6) {
            alert('Password should be at least 6 characters (auth/weak-password).')
            return;
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            alert('please provide 1 upper case and 1 lowercase')
            return;
        }

        handleCreateUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
             console.log(errorMessage);
          });
        
    }

    return (
        <div>
            Register
        </div>
    );
};

export default Register;