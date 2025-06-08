import { Container, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import ProgressTracker from './ProgressTracker';
import "react-datepicker/dist/react-datepicker.css"; 
import './StepStyles.css';

const Step2DateTime = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <Container style={{ backgroundColor: '#f0f0f0', minHeight: '80vh' }} fluid>
      <ProgressTracker currentStep={2} />
      <Container className="d-flex flex-column align-items-center py-4">
        <div className="calendar-container bg-white p-3 rounded shadow-sm">
           <DatePicker
            selected={formData.appointmentDate}
            onChange={handleChange('appointmentDate')}
            inline 
           />
        </div>

        <Form.Select
          className="mt-4"
          style={{ maxWidth: '400px' }}
          aria-label="Choose time"
          onChange={handleChange('appointmentTime')}
          value={formData.appointmentTime}
        >
          <option>Choose time...</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="02:00 PM">02:00 PM</option>
        </Form.Select>

        <div className="d-flex justify-content-between w-100 mt-5 px-md-5">
          <Button variant="dark" onClick={prevStep}>Previous</Button>
          <Button variant="dark" onClick={nextStep}>Next</Button>
        </div>
      </Container>
    </Container>
  );
};

export default Step2DateTime;