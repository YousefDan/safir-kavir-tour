import "./login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // form submit handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      username,
      password,
    });
  };
  return (
    <div className="login">
      <h1>ورود به حساب کاربری</h1>
      <form onSubmit={formSubmitHandler} className="login-form">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="نام کاربری"
          autoFocus
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="رمز عبور"
        />
        <button type="submit" className="login-to-account">
          ورود به حساب کاربری
        </button>
        <div style={{ margin: "10px 0" }}>
          حساب کاربری ندارید؟{" "}
          <Link style={{ textDecoration: "none" }} to="/register">
            عضویت در سایت
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
