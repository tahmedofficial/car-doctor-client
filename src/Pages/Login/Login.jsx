import loginImg from "../../assets/images/login/login.svg";


const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
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
            </div>
        </div>
    );
};

export default Login;