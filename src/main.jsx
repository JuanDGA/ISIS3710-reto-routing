import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Container className="mt-3">
    <Row>
      <App />
    </Row>
  </Container>,
);
