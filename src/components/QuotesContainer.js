import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import QuoteList from "./QuoteList";
import QuoteForm from "./QuoteForm";

function QuotesContainer(props) {
  const [quotes, setQuotes] = useState([]);

  const addItem = (quote) => {
    const result = [quote, ...quotes];
    setQuotes(result);
  };
  return (
    <>
      <Row>
        <Col sm={8}>
          <QuoteList quotes={quotes} />
        </Col>
        <Col sm={4}>
          <QuoteForm addItem={addItem} />
        </Col>
      </Row>
    </>
  );
}
export default QuotesContainer;
