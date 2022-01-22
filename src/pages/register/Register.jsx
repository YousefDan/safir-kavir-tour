import "./register.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import InputGroup from "./InputGroup";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // form submit handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      username,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <div className="register">
      <h1>ثبت نام در سایت</h1>
      <form onSubmit={formSubmitHandler} className="register-form">
        <InputGroup
          label="نام کاربری"
          input={{
            value: username,
            onChange: (e) => setUsername(e.target.value),
            type: "text",
            id: "username",
            autoFocus: true,
          }}
        />
        <InputGroup
          label="ایمیل یا شماره تماس"
          input={{
            value: email,
            onChange: (e) => setEmail(e.target.value),
            type: "text",
            id: "email",
          }}
        />
        <InputGroup
          label="رمز عبور"
          input={{
            value: password,
            onChange: (e) => setPassword(e.target.value),
            type: "password",
            id: "password",
          }}
        />
        <InputGroup
          label="تکرار رمز عبور"
          input={{
            value: confirmPassword,
            onChange: (e) => setConfirmPassword(e.target.value),
            type: "password",
            id: "confirmPassword",
          }}
        />
        <button type="submit" className="register-new-user-btn">
          عضویت
        </button>
        <div style={{ margin: "10px 0" }}>
          حساب کاربری دارید؟{" "}
          <Link style={{ textDecoration: "none" }} to="/login">
            ورود به سایت
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
