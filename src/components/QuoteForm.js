import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
function QuoteForm(props) {
  const { addItem } = props;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: uuidv4(),
      name: name,
      description: description,
    };
    //console.log(formData);
    addItem(formData);
    setName("");
    setDescription("");
  };

  return (
    <div>
      <h3>Add Quote</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={handleDescriptionChange}
          />
        </Form.Group>
        <Button type="submit">Submit Form</Button>
      </Form>
    </div>
  );
}
export default QuoteForm;
