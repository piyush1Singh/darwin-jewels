import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Tabs, Tab } from "react-bootstrap";

const LoginModal = (props) => {
  const [key, setKey] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [registerMessage, setRegisterMessage] = useState("")
  const [registerClass, setRegisterClass] = useState("")
  const emailHandle = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  const login = async (e) => {
    setLoginError("")
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      let url = await fetch(
        "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Login-Register/login.php",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      let data = await url.json();
      console.log(data.status);
      if (data.status == true) {
        props.handleClose();
        localStorage.setItem("login", true);
        return;
      } else {
        setLoginError("Please Enter Valid Email And Password");
        return;
      }
    } else {
      setLoginError("Please Enter Valid Email And Password");
      return;
    }
  };

  const register = async (e) => {
    setRegisterMessage("")
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      let url = await fetch(
        "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Login-Register/register.php",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      let data = await url.json();
      if (data.status == true) {
        setRegisterMessage("User Successfully Registered , Please Login To Proceed")
        setRegisterClass("success")
        return;
      } else {
        setRegisterMessage("Please Enter Valid Email And Password");
        setRegisterClass("danger")
        return;
      }
    } else {
        setRegisterMessage("Please Enter Valid Email And Password");
        setRegisterClass("danger")
      return;
    }
  };

  return (
    <Modal
      className="modal-xxl"
      show={props.show}
      onHide={props.handleClose}
      size="xxl"
    >
      <Modal.Body>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="login" title="Log In">
            <h4 class="fs-34 text-center mb-6">Sign In</h4>
            <p class="text-center fs-16 mb-7">
              Don’t have an account yet?
              <a
                href=""
                class="text-secondary border-bottom text-decoration-none"
              >
                Sign up
              </a>
              for free
            </p>
            <h6 className="text-danger">{loginError}</h6>
            <form>
              <input
                name="email"
                type="email"
                class="form-control border-0 mb-3"
                placeholder="Your email"
                required
                onChange={(e) => emailHandle(e)}
              />
              <input
                name="password"
                type="password"
                class="form-control border-0"
                placeholder="Password"
                required
                onChange={(e) => passwordHandle(e)}
              />
              <div class="d-flex align-items-center justify-content-between mt-5 mb-4">
                <a href="" class="text-secondary">
                  Forgot your password?
                </a>
              </div>
              <button
                type="submit"
                value="Login"
                class="btn btn-secondary btn-block bg-hover-primary border-hover-primary"
                onClick={(e) => login(e)}
              >
                Log In
              </button>
              <div class="border-bottom mt-6"></div>
              <div class="text-center mt-n2 lh-1 mb-4">
                <span class="fs-14 bg-white lh-1 mt-n2 px-4">
                  or Log-in with
                </span>
              </div>
              <div class="d-flex">
                <a
                  href=""
                  class="btn btn-outline-secondary btn-block border-2x border mr-5 border-hover-secondary"
                >
                  <i class="fab fa-facebook-f mr-2"></i>Facebook
                </a>
                <a
                  href=""
                  class="btn btn-outline-secondary btn-block border-2x border mt-0 border-hover-secondary"
                >
                  <i class="fab fa-google mr-2"></i>Google
                </a>
              </div>
            </form>
          </Tab>
          <Tab eventKey="register" title="Register">
            <div
              class="tab-pane fade active show"
              id="nav-register"
              role="tabpanel"
              aria-labelledby="nav-register-tab"
            >
              <h4 class="fs-34 text-center mb-6">Sign Up</h4>
              <p class="text-center fs-16 mb-7">
                Already have an account?
                <a
                  href=""
                  class="text-secondary border-bottom text-decoration-none"
                >
                  Log in
                </a>
              </p>
              <h5 className={`text-${registerClass}`}>{registerMessage}</h5>
              <form>

                <input
                  name="email"
                  type="email"
                  class="form-control border-0 mb-3"
                  placeholder="Your email"
                  required=""
                  onChange={(e) => emailHandle(e)}
                />
                <input
                  name="password"
                  type="password"
                  class="form-control border-0"
                  placeholder="Password"
                  required
                  onChange={(e) => passwordHandle(e)}
                />
                <div class="d-flex align-items-center justify-content-between mt-5 mb-4">
                  <a href="" class="text-secondary">
                    Forgot your password?
                  </a>
                </div>
                <button
                  type="submit"
                  value="Login"
                  class="btn btn-secondary btn-block bg-hover-primary border-hover-primary"
                  onClick={(e) => register(e)}
                >
                  Sign Up
                </button>
                <div class=" mt-6"></div>
              </form>
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;