import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage'; 
import BookingPage from './pages/BookingPage'; 
import EmergencyPage from './pages/EmergencyPage';
import SurgeryPage from './pages/SurgeryPage';
import VaccinationPage from './pages/VaccinationPage';
import DentistryPage from './pages/DentistryPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <NavigationBar />

      <Routes>
          <Route path="/VetService/" element={<HomePage />} />
          <Route path="/VetService/Booking/" element={<BookingPage />} />
          <Route path="/VetService/Emergency/" element={<EmergencyPage />} />
          <Route path="/VetService/Surgery/" element={<SurgeryPage />} />
          <Route path="/VetService/Vaccination/" element={<VaccinationPage />} />
          <Route path="/VetService/Dentistry/" element={<DentistryPage />} />
          <Route path="/VetService/Contact/" element={<ContactPage />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;