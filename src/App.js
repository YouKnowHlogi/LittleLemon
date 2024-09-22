import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main'; // Assuming this is your homepage or main content
import BookingPage from './BookingPage'; // Import the BookingPage component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import react-router for routing

function App() {
  return (
    <Router>
      <>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} /> {/* Main content (homepage) */}
          <Route path="/reserve" element={<BookingPage />} /> {/* Booking page */}
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
