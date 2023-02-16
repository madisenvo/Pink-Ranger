import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./contact.css";

export default function Contact() {
    return (
    <div>
        <Form className="form">
        <Form.Group className="m-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" required />
        </Form.Group>

        <Form.Group className="m-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Email" required />
        </Form.Group>

        <Form.Group className="m-3">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" placeholder="Message" required />
        </Form.Group>

        <Button className="m-3" type="submit">
            Submit
        </Button>
        </Form>
    </div>
    );
}
