import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={1}>
            <Sidebar />
          </Col>
          <Col md={12}>
            <Header />
            <Content />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
