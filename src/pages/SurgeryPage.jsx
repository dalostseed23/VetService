import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/About.css';


const SurgeryPage = () => {
  return (
    <Container className="my-5">
      <h2 className="fw-bold mb-4">Veterinary Surgical Services</h2>

      <Row>
        <Col md={8}>
          <p>
            At <strong>Better Vet</strong>, we provide a wide range of surgical services including spaying, neutering, mass removals, and emergency procedures. Our advanced equipment and experienced team ensure safe and effective care.
          </p>

          <p>
            We prioritize your pet's safety with pre-operative exams, monitoring throughout surgery, and detailed post-operative instructions for a smooth recovery.
          </p>

          <p>
            Whether it's a planned procedure or urgent surgical need, our team is here to support you and your pet every step of the way.
          </p>

          <div className="mt-5">
            <Link to="/VetService/Booking/">
              <Button className="button" size="lg">
                Book Appointment
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SurgeryPage;
