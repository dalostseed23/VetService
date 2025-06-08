import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/About.css';

const EmergencyPage = () => {
  return (
    <Container className="my-5">
      <h2 className=" fw-bold mb-4">24/7 Emergency Veterinary Services</h2>

      <Row>
        <Col md={8}>
          <p>
            At <strong>Better Vet</strong>, we understand that emergencies can happen at any time. That's why we offer <strong>24/7 emergency care</strong> for your pets, no matter the day or hour. Whether your pet has experienced trauma, ingested something harmful, or is showing signs of distress, our experienced veterinary team is ready to help.
          </p>

          <p>
            <strong>Please call us before arriving</strong> so we can prepare for your pet's arrival and provide immediate attention. Calling ahead allows us to assess the urgency and ensure your pet is seen as quickly as possible.
          </p>

          <p>
            Emergency services may include diagnostics, surgery, intensive care, or pain management. Your pet's health and comfort are our top priorities, and we will communicate clearly with you at every step.
          </p>

          <div className="mt-5">
            <Link to="/VetService/contact">
              <Button className="button" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EmergencyPage;
