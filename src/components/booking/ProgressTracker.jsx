import { Container } from 'react-bootstrap';
import './ProgressTracker.css';

const ProgressTracker = ({ currentStep }) => {
  return (
    <Container className="pt-5 pb-3 text-center">
      <div className="progress-container">
        <div className={`step-circle ${currentStep >= 1 ? 'active' : ''}`}>1</div>
        <div className="progress-line"></div>
        <div className={`step-circle ${currentStep >= 2 ? 'active' : ''}`}>2</div>
        <div className="progress-line"></div>
        <div className={`step-circle ${currentStep >= 3 ? 'active' : ''}`}>3</div>
      </div>
      <h4 className="mt-3 fw-bold">Appointment Preferences</h4>
    </Container>
  );
};

export default ProgressTracker;