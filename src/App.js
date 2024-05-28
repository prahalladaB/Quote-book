import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import QuotesContainer from "./components/QuotesContainer";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-primary">Quote Book</h1>
        </Col>
      </Row>
      <QuotesContainer />
    </Container>
  );
}

export default App;
