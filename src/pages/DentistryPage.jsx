import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/About.css';

const DentistryPage = () => {
  return (
    <Container className="my-5">
      <h2 className="fw-bold mb-4">Comprehensive Pet Dentistry</h2>

      <Row>
        <Col md={8}>
          <p>
            Dental health is crucial to your pet's overall well-being. At <strong>Better Vet</strong>, we offer full dental care services including cleanings, tooth extractions, X-rays, and oral health assessments.
          </p>

          <p>
            Untreated dental issues can lead to pain, infection, and even systemic health problems. Our experienced team uses gentle, safe procedures to ensure your pet's comfort during every dental visit.
          </p>

          <p>
            Routine dental check-ups are recommended to maintain healthy teeth and gums, prevent disease, and ensure your pet's long-term health.
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

export default DentistryPage;
