import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate()

  return (
    <div className="form-v5">
      <div className="page-content">
        <div className="form-v5-content">
          <form className="form-detail" action="#" method="post">
            <h2>Login</h2>
            {/* <div className="form-row">
              <label for="full-name">User Name:</label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                className="input-text"
                placeholder="Full Name"
                required
              />
            </div> */}
            
            <div className="form-row">
              <label for="your-email">Email:</label>
              <input
                type="text"
                name="your-email"
                id="your-email"
                className="input-text"
                placeholder="Email"
                required
                pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
              />
            </div>
            <br/>
            <div className="form-row">
              <label for="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-text"
                placeholder="Password"
                required
              />
            </div>
            <br/>
            <div className="last-line">
              <p>Don't have an account? <span onClick={()=>navigate('/Register')}>Register</span> </p>
            </div>
            <div className="signup-btn">
              <button className="reg">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
