import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 


const Confirmation = () => {
  const navigate = useNavigate(); 

  const handleOkClick = () => {
    navigate('/VetService/');
  };

  return (
    <Container
      style={{ backgroundColor: '#f0f0f0', minHeight: '80vh' }}
      className="d-flex flex-column justify-content-center align-items-center text-center"
      fluid
    >
      <h2 className="fw-bold">APPOINTMENT CONFIRMATION</h2>
      <p>We will send you an email with the booking information shortly...</p>
      <Button variant="dark" onClick={handleOkClick}>OK</Button>
    </Container>
  );
};

export default Confirmation;