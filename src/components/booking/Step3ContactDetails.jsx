import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import ProgressTracker from './ProgressTracker';

const Step3ContactDetails = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <Container style={{ backgroundColor: '#f0f0f0', minHeight: '80vh' }} fluid>
      <ProgressTracker currentStep={3} />
      <Container className="py-4">
        <h5 className="fw-bold">Contact details</h5>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email address" onChange={handleChange('email')} value={formData.email} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="tel" placeholder="Phone number" onChange={handleChange('phone')} value={formData.phone} />
          </Form.Group>

          <h5 className="fw-bold mt-4">Your name</h5>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control placeholder="First Name" onChange={handleChange('firstName')} value={formData.firstName} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Last Name" onChange={handleChange('lastName')} value={formData.lastName} />
              </Form.Group>
            </Col>
          </Row>

          <h5 className="fw-bold mt-4">Pet's details</h5>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Pet name" onChange={handleChange('petName')} value={formData.petName} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Reason for appointment" onChange={handleChange('reason')} value={formData.reason} />
          </Form.Group>
        </Form>
        <div className="d-flex justify-content-between mt-5">
          <Button variant="dark" onClick={prevStep}>Previous</Button>
          <Button variant="dark" onClick={nextStep}>Next</Button>
        </div>
      </Container>
    </Container>
  );
};

export default Step3ContactDetails;