import './index.css'
import { useNavigate } from "react-router-dom";


function Register () {
  const navigate = useNavigate()

  return (
    <div className="form-v5">
      <div className="page-content">
        <div className="form-v5-content">
          <form className="form-detail" action="#" method="post">
            <h2>Register</h2>
            <div className="form-row">
              <label for="full-name">User Name:</label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                className="input-text"
                placeholder="Full Name"
                required
              />
            </div>
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
            <div className="last-line">
              <p>Already have an account? <span onClick={()=>navigate('/Login')}>Login</span> </p>
            </div>
            <div className="signup-btn">
              <button className="reg">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;