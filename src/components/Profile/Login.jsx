import React from "react";
import { Link} from "react-router-dom";


const Login = () => {
  return (
    <div>
      <div>
        <h1>Login</h1>
        <form action="">
          <div>
            <input type="email" />
            <label htmlFor=""> Email</label>
          </div>
          <div>
            <input type="email" />
            <label htmlFor=""> Email</label>
          </div>
          <div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor=""> Remember Me</label>
            </div>
            <span>Forgot Password ? </span>
          </div>
        <div>
        <button type="submit">Login </button>
        </div>
        <div>
          <span> No Account with Us ? <Link to ="Register">Create an Account</Link></span>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
