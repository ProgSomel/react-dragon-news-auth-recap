import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        //! Sing In 
        signIn(email, password)
        .then(res => {console.log(res)
            navigate(location?.state ? location.state : '/')
            }
        )
        .catch(err => console.log(err));
    }

  return (
    <div className="bg-gray-300">
      <Navbar></Navbar>
        <h2 className="text-center text-5xl mt-8 font-bold">Please Login</h2>
      <form onSubmit={handleLogin} className="card-body lg:w-1/2 mx-auto   ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email" name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password" name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-center mt-4 ">Don't have an Account? <Link className="text-blue-400 underline" to='/register'>Register</Link></p>
            </form>
            
    </div>
  );
};

export default Login;
