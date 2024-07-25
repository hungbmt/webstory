import { Button, Form } from "react-bootstrap";
import { apiLogin } from "../../../Reducer/apiReques";
import { useDispatch } from "react-redux";
import { useState } from "react";

const LoginPage = () => {
  const dispath = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubMitLogin = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    apiLogin(dispath, data);
  };
  console.log(username);
  return (
    <>
      <div
        className="authe-login-wrapper d-flex align-content-center justify-content-center"
        style={{ marginTop: 100 }}
      >
        <Form onSubmit={handleSubMitLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              placeholder="Enter email"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
