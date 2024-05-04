import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";


const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(data => {
                console.log(data.user);
                // get access token
                const user = { email };
                axios.post("http://localhost:5000/jwt", user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : "/")
                        }
                    })
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="grid md:grid-cols-2 md:w-4/6 mx-auto mt-32">
            <div className="col-span-1">
                <img src={loginImg} alt="" />
            </div>
            <div className="col-span-1">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-orange-600 text-white text-lg">Login</button>
                    </div>
                </form>
                <div>
                    <h3>Or Sign In with</h3>
                    <div>

                    </div>
                    <h3>New to Car Doctor <Link to="/signUp" className="font-medium text-orange-600">Sign Up</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Login;