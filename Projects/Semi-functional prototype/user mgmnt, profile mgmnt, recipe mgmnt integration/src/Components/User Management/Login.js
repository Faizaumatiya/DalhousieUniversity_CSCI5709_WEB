import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const { state } = useLocation();
  const { newPassword } = state ?? {}; ;

  const navigate = useNavigate();

  let errorFlag = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(newPassword)
    const formValue = {
      email,
      password,
    };
    setError(validateForm(formValue));
    if (
      errorFlag === 0 &&
      (email === "saif@gmail.com") &&
      (password === "M@zacar101117" || password === newPassword)
    )  {
      alert("User authenticated");
      navigate('/feed')
      setEmail("");
      setPassword("");
    } else {
      alert("Incorrect email/password");
    }
  };

  const validateForm = (data) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; //Reference : https://regexr.com/3e48o
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //Reference: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    const errorMessage = {};
    if (data.email === "" || emailRegex.test(data.email) == false) {
      errorFlag = 1;
      errorMessage.email = "Email is not valid";
    } else if (passwordRegex.test(data.password) == false) {
      errorFlag = 1;
      errorMessage.password =
        "Password must be more than 8 characters, must have at least one uppercase letter, one lowercase letter, one number and one special character";
    } else {
      errorFlag = 0;
    }
    return errorMessage;
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "30rem", height: "27rem" }}>
          <Card.Body>
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleSubmit}>
              <div style={{ textAlign: "left" }}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onSubmit={handleSubmit}
                    required
                  />
                </Form.Group>
                <div
                  className="error"
                  style={{ color: "red", fontSize: "14px" }}
                >
                  {" "}
                  {error.email}{" "}
                </div>
              </div>
              <div style={{ textAlign: "left" }}>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onSubmit={handleSubmit}
                    required
                  />
                </Form.Group>
                {error && (
                  <div
                    className="error"
                    style={{ color: "red", fontSize: "14px" }}
                  >
                    {" "}
                    {error.password}{" "}
                  </div>
                )}
              </div>
              <div
                className="w-100 text-right mt -2"
                style={{ textAlign: "right", marginTop: "10px" }}
              >
                <Link to= '/forgotpassword'>Forgot Password</Link>
              </div>
              <Button style={{ marginTop: "30px" }} type="submit">
                Log In
              </Button>
            </Form>
            <div
              className="w-100 text-right mt -2"
              style={{ marginTop: "20px" }}
            >
              Not Registered? <Link to= '/signup'>Signup</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
