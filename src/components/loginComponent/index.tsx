import React from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

const LoginComponent: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-left">
          <h2>{t("sign_in")}</h2>
          <div className="social-login">
            <button className="social-btn"><i className="fab fa-google"></i></button>
            <button className="social-btn"><i className="fab fa-facebook-f"></i></button>
            <button className="social-btn"><i className="fab fa-github"></i></button>
            <button className="social-btn"><i className="fab fa-linkedin-in"></i></button>
          </div>
          <p className="text-muted">{t("login_with_email_password")}</p>

          <form className="login-form">
            <input type="email" placeholder="Email" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <a href="#" className="forgot-password">{t("forget_password")}</a>
            <button type="submit" className="sign-in-btn">{t("sign_in")}</button>
          </form>
        </div>

        <div className="login-right">
          <h2>{t("hello_friend")}</h2>
          <p>{t("register_message")}</p>
          <button className="sign-up-btn">{t("login")}</button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
