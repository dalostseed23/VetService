import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faPaw} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div>
      <div style={{ backgroundColor: '#8b0000', color: 'white', textAlign: 'center', padding: '0.5rem 1rem', fontWeight: 'bold' }}>
        FOR EMERGENCIES, CALL : 613-849-XXXX
      </div>
    <Container className="py-3">
      <Row className="align-items-center g-md-4">
        <Col xs={12} md={6}>
        <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faPaw} className="me-2" style={{ marginRight: '15px', fontSize: '4.5rem'}} />
            <div>
              <h5 className="mb-0 fw-bold">BETTER VET</h5>
              <p className="mb-0 text-muted">VETERINARY HOSPITAL</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-md-end mt-3 mt-md-0">
          <p className="mb-1">
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px' }} />
            <strong>Address:</strong> 535 Rainbow Road, Ottawa, ON, Canada, K3F F6F
          </p>
          <p className="mb-1">
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
            <strong>Email:</strong> help@vet.com
          </p>
          <p className="mb-0">
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
            <strong>Phone:</strong> 613-849-XXXX
          </p>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default Header;
