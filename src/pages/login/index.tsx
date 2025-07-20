import React from "react";
import "./index.css";

const LoginPage: React.FC = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* Bagian kiri (Sign In) */}
        <div className="login-left">
          <h2>Sign In</h2>
          <div className="social-login">
            <button className="social-btn"><i className="fab fa-google"></i></button>
            <button className="social-btn"><i className="fab fa-facebook-f"></i></button>
            <button className="social-btn"><i className="fab fa-github"></i></button>
            <button className="social-btn"><i className="fab fa-linkedin-in"></i></button>
          </div>
          <p className="text-muted">or use your email password</p>

          <form className="login-form">
            <input type="email" placeholder="Email" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <a href="#" className="forgot-password">Forget Your Password?</a>
            <button type="submit" className="sign-in-btn">SIGN IN</button>
          </form>
        </div>

        {/* Bagian kanan (Hello Friend) */}
        <div className="login-right">
          <h2>Hello, Friend!</h2>
          <p>Register with your personal details to use all of site features</p>
          <button className="sign-up-btn">SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
