import classes from "../../style/Admin/AdminLogin.module.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
function AdminLogin() {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const userNameRef = useRef("");
  const userPasswordRef = useRef("");

  const database = [
    {
      username: "admin",
      password: "admin123",
    },
    {
      username: "admin",
      password: "pass2",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    const usernameValue = userNameRef.current.value;
    const userPasswordValue = userPasswordRef.current.value;
    console.log(usernameValue);
    console.log(userPasswordValue);

    const userData = database.find((user) => {
      return user.username === usernameValue;
    });

    if (userData) {
      if (userData.password !== userPasswordValue) {
        console.log("wrong pass");
        alert("Wrong Password");
      } else {
        navigate("/admin/home");
      }
    } else {
      console.log("wrong email");
      alert("Wrong Username");
    }
  };

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  return (
    <>
      <div className={classes.login_box}>
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={classes.user_box}>
            <input type="text" name="" required ref={userNameRef} />
            <label>Username</label>
          </div>
          <div className={classes.user_box}>
            <input type="password" name="" required ref={userPasswordRef} />
            <label>Password</label>
          </div>
          <a href="#" onClick={handleLogin}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>
      </div>
    </>
  );
}

export default AdminLogin;
