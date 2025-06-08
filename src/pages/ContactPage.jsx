import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const ContactPage = () => {
  const [userLocation, setUserLocation] = useState('');

  const clinicAddress = "535 Rainbow Road, Ottawa, ON, Canada";
  const googleMapsBase = "https://www.google.com/maps/dir/?api=1";

  const directionLink = `${googleMapsBase}&origin=${encodeURIComponent(userLocation)}&destination=${encodeURIComponent(clinicAddress)}`;

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-5">Contact Us</h2>
      <Row>

        <Col md={6} className="mb-4">
          <h4 className="mb-4">Better Vet</h4>
          <p><strong>Address:</strong> {clinicAddress}</p>
          <p><strong>Email:</strong> help@vet.com</p>
          <p><strong>Phone:</strong> 613-849-XXXX</p>
          <p className="mb-5"><strong>Hours:</strong> 24/7</p>


          <Form>
            <Form.Group className="mb-3" controlId="formLocation">
              <Form.Label>Enter your location for directions</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. King Edward Avenue"
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
              />
            </Form.Group>
            <Button
              style={{backgroundColor: "#8b0000" }}
              href={directionLink}
              target="_blank"
              disabled={!userLocation}
            >
              Get Directions
            </Button>
          </Form>
        </Col>


        <Col md={6}>
          <div className="ratio ratio-16x9">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(clinicAddress)}&output=embed`}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Clinic Location"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
