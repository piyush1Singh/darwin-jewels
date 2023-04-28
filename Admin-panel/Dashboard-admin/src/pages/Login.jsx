import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Login")) {
      navigate("/");
    }
  }, []);

  const [login, setLogin] = useState();
  const [result, setResult] = useState();
  const [registerEmailState, setRegisterEmailState] = useState();
  const [registerPasswordState, setRegisterPasswordState] = useState();
  const [loginEmailState, setLoginEmailState] = useState();
  const [loginPasswordState, setLoginPasswordState] = useState();

  const registerEmail = (e) => {
    setRegisterEmailState(e.target.value);
  };
  const registerPassword = (e) => {
    setRegisterPasswordState(e.target.value);
  };
  const loginEmail = (e) => {
    setLoginEmailState(e.target.value);
  };
  const loginPassword = (e) => {
    setLoginPasswordState(e.target.value);
  };

  const registerLogin = async () => {
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Login-Register/register.php",
      {
        method: "POST",
        body: JSON.stringify({
          email: registerEmailState,
          password: registerPasswordState,
        }),
      }
    );
    let data = await url.json();
    if (data["status"] == false) {
      setResult("Email Or Password Invalid");
    } else {
      setResult("SuccessFully Registered");
    }
  };

  const SubmitLogin = async (e) => {
    e.preventDefault();
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Login-Register/login.php",
      {
        method: "POST",
        body: JSON.stringify({
          email: loginEmailState,
          password: loginPasswordState,
        }),
      }
    );
    let data = await url.json();
    if (data["status"] == false) {
      setResult("Email Or Password Invalid");
    } else {
      localStorage.setItem("user_id", data["user_id"]);
      setResult("SuccessFully Login");
      navigate("/");
      setLogin(localStorage.setItem("Login", true));
    }
  };

  return (
    <div className="container">
      <Tabs>
        <TabList>
          <Tab>Login</Tab>
          <Tab>Register</Tab>
        </TabList>

        <TabPanel>
          <form>
            <div className="form-control mb-3">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                required
                onChange={(e) => loginEmail(e)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                required
                onChange={(e) => loginPassword(e)}
              />
            </div>
            <div className="form-control">
              <button className="btn btn-primary" onClick={SubmitLogin}>
                Submit
              </button>
            </div>
            <div className="text-danger">{result}</div>
          </form>
        </TabPanel>
        <TabPanel>
          <form>
            <div className="form-control mb-3">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                required
                onChange={(e) => registerEmail(e)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                required
                onChange={(e) => registerPassword(e)}
              />
            </div>
            <div className="form-control">
              <button className="btn btn-primary" onClick={registerLogin}>
                Register
              </button>
              <div className="text-danger">{result}</div>
            </div>
          </form>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Login;
