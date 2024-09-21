import "./App.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const App = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    favClass: "1",
  });

  const [validationStates, setValidationStates] = useState({
    emailState: true,
    passwordState: true,
  });

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    const isValidPassword =
      formValues.password.length >= 9 &&
      new RegExp("^(?=.*[a-zA-Z])(?=.*\\d).+$").test(formValues.password);
    setFormValues({ ...formValues, password: e.target.value });
    setValidationStates({
      ...validationStates,
      passwordState: isValidPassword,
    });
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };

  const clickSubmit = () => {
    const isValidEmail = new RegExp(
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    ).test(formValues.email);
    setValidationStates({ ...validationStates, emailState: isValidEmail });
    if (isValidEmail) alert(JSON.stringify(formValues));
  };

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>
      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            isInvalid={!validationStates.emailState}
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            value={formValues.email}
          />
          {!validationStates.emailState && (
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            isInvalid={!validationStates.passwordState}
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={formValues.password}
          />
          {!validationStates.passwordState && (
            <Form.Text className="text-muted">
              Your password should be have numbers and letters and should be at
              least 9 char long
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologias web</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default App;
