import { Container, Button, Card, Row, Col, Form } from 'react-bootstrap';
import ProgressTracker from './ProgressTracker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCat } from '@fortawesome/free-solid-svg-icons';
import './StepStyles.css';

const Step1Preferences = ({ nextStep, handleSelectChange, formData }) => {
  return (
    <Container style={{ backgroundColor: '#f0f0f0', minHeight: '80vh' }} fluid>
      <ProgressTracker currentStep={1} />
      <Container className="py-4">
        <h5 className="fw-bold">Client status</h5>
        <div>
          <Button
            className={`client-status ${formData.clientStatus === 'New client' ? 'selected' : 'light'} me-2`}
            onClick={() => handleSelectChange('clientStatus', 'New client')}
          >
            New client
          </Button>
          <Button
            className={`client-status ${formData.clientStatus === 'Returning client' ? 'selected' : 'light'} me-2`}
            onClick={() => handleSelectChange('clientStatus', 'Returning client')}
          >
            Returning client
          </Button>
        </div>

        <h5 className="fw-bold mt-4">Select Pet</h5>
        <Row>
          <Col xs={4} md={2}>
            <Card
              className={`pet-card ${formData.petType === 'Dog' ? 'selected' : ''}`}
              onClick={() => handleSelectChange('petType', 'Dog')}
            >
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={faDog} />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} md={2}>
            <Card
              className={`pet-card ${formData.petType === 'Cat' ? 'selected' : ''}`}
              onClick={() => handleSelectChange('petType', 'Cat')}
            >
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={faCat} />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h5 className="fw-bold mt-4">Select appointment type</h5>
        <Form.Select
          aria-label="Appointment type"
          onChange={(e) => handleSelectChange('appointmentType', e.target.value)}
          value={formData.appointmentType}
        >
          <option>Select...</option>
          <option value="Surgery">General Check-Up</option>
          <option value="Surgery">Surgery</option>
          <option value="Vaccination">Vaccination</option>
          <option value="Dentistry">Dentistry</option>
        </Form.Select>

        <div className="text-end mt-5">
          <Button variant="dark" onClick={nextStep}>Next</Button>
        </div>
      </Container>
    </Container>
  );
};

export default Step1Preferences;