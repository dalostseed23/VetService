import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import emergencyImg from '../assets/mpho-mojapelo-s6Vv9u2qZyc-unsplash.jpg';
import surgeryImg from '../assets/judy-beth-morris-5Bi6MWlWMbw-unsplash.jpg';
import vaccinationImg from '../assets/mathurin-napoly-matnapo-BBdKPGfEGUI-unsplash.jpg';
import dentistryImg from '../assets/vidak-ic-__xnulU8-unsplash.jpg';

const Services = () => {
  const servicesData = [
    {
      title: "24/7 Emergency",
      text: "Immediate care for critical situations, available anytime, day or night.",
      route: "/VetService/Emergency",
      img: emergencyImg
    },
    {
      title: "Surgery",
      text: "A wide range of surgical procedures with state-of-the-art equipment.",
      route: "/VetService/Surgery",
      img: surgeryImg
    },
    {
      title: "Vaccination",
      text: "Protect your pet with essential vaccinations and preventative care.",
      route: "/VetService/Vaccination",
      img: vaccinationImg
    },
    {
      title: "Dentistry",
      text: "Complete dental care, from routine cleanings to extractions.",
      route: "/VetService/Dentistry",
      img: dentistryImg
    }
  ];

  return (
    <Container className="my-5">
      <h2 className="text-left mb-5 fw-bold">OUR SERVICES</h2>
      <Row>
        {servicesData.map((service, index) => (
          <Col lg={3} md={6} key={index} className="mb-4">
            <Card className="h-100 d-flex flex-column justify-content-between">
              <Card.Img 
                variant="top" 
                src={service.img} 
                alt={service.title} 
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">{service.title}</Card.Title>
                <Card.Text>{service.text}</Card.Text>
              </Card.Body>
              <div className="text-center mb-3">
                <Link to={service.route}>
                  <Button className="button" size="sm">Learn More</Button>
                </Link>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
