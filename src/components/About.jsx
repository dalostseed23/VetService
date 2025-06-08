import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-section text-white d-flex align-items-center">
      <Container>

        <Row className="align-items-center justify-content-between">
          <Col md={12}>
            <h1 className="display-4 fw-bold">ABOUT US</h1>
            <h2 className="fw-bold mb-3">Your Pet's Health Is Our Priority</h2>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={8}>
            <p>
              At <strong>Better Vet</strong>, we believe every pet deserves compassionate, high-quality care. 
              Located in the heart of Ottawa, our modern veterinary clinic provides personalized services tailored 
              to your furry companion's unique needs. Whether it's a routine check-up, dental care, surgery, or emergency attention, 
              our dedicated team of licensed veterinarians and animal care professionals is here for you.
            </p>
            <p>
              We know pets are family. That's why we focus not just on treatment, but also on education, prevention, and building 
              long-term relationships with our clients. From first vaccinations to senior wellness plans, 
              Better Vet is your trusted partner in every stage of your pet's life.
            </p>
            <p>
              Come visit us and experience veterinary care with a heart. 🐾
            </p>
          </Col>
          <Col xs={12} md="auto" className="d-flex align-items-end">
              <div className="ms-md-0">
                <Link to="/VetService/Booking/">
                  <Button size="lg" className="button">Book an Appointment</Button>
                </Link>
              </div>       
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;