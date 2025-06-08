import { useState } from 'react';
import Step1Preferences from './Step1Preferences';
import Step2DateTime from './Step2DateTime';
import Step3ContactDetails from './Step3ContactDetails';
import Confirmation from './Confirmation';

const BookingProcess = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    clientStatus: 'New client',
    petType: 'Cat',
    appointmentType: '',
    appointmentDate: new Date(),
    appointmentTime: '',
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    petName: '',
    reason: ''
  });


  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);


  const handleChange = (input) => e => {
    const value = e.target ? e.target.value : e; 
    setFormData({ ...formData, [input]: value });
  };

  const handleSelectChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  switch (step) {
    case 1:
      return (
        <Step1Preferences
          nextStep={nextStep}
          handleSelectChange={handleSelectChange}
          formData={formData}
        />
      );
    case 2:
      return (
        <Step2DateTime
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 3:
      return (
        <Step3ContactDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 4:
      return <Confirmation />;
    default:
      return <div>Error</div>;
  }
};

export default BookingProcess;