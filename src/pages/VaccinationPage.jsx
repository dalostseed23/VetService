import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/About.css';

const VaccinationPage = () => {
  return (
    <Container className="my-5">
      <h2 className="fw-bold mb-4">Vaccinations & Preventative Care</h2>

      <Row>
        <Col md={8}>
          <p>
            Keep your pets protected with up-to-date vaccinations. <strong>Better Vet</strong> offers core and lifestyle vaccines tailored to your pet's needs and risk factors.
          </p>

          <p>
            Vaccines help prevent serious diseases such as rabies, distemper, parvovirus, and more. We provide puppy/kitten vaccine series and boosters for adult pets.
          </p>

          <p>
            Our team is happy to discuss your pet's lifestyle and recommend the most appropriate vaccination schedule.
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

export default VaccinationPage;
