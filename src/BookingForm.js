import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css'; 

function BookingForm() {
    // State for form inputs
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [seatPreference, setSeatPreference] = useState(''); // New state for seat preference
    
    // Modal control states
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isReservationConfirmed, setIsReservationConfirmed] = useState(false);
  
    // Initialize the navigate hook
    const navigate = useNavigate();
  
    // Handle form submission to show the reservation summary modal
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsModalOpen(true);
    };
  
    // Handle confirm reservation
    const handleConfirmReservation = () => {
      setIsReservationConfirmed(true); // Show success message
    };
  
    // Handle back to home button
    const handleBackToHome = () => {
      setIsModalOpen(false); // Close the modal
      setIsReservationConfirmed(false); // Reset the modal content
      navigate('/'); // Navigate back to homepage
    };
  
    return (
      <>
        <form onSubmit={handleSubmit} className="booking-form">
          <h2>Reserve Your Table</h2>

          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Select time</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option value="">Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>

          {/* New Field: Seat Preference */}
          <label htmlFor="seat-preference">Seating Preference</label>
          <select
            id="seat-preference"
            value={seatPreference}
            onChange={(e) => setSeatPreference(e.target.value)}
            required
          >
            <option value="">Select seating preference</option>
            <option value="Center">Center</option>
            <option value="Side">Side</option>
            <option value="Skyline">Skyline</option>
            <option value="Outside">Outside</option>
          </select>

          <input type="submit" value="Make Your Reservation" className="submit-button" />
        </form>
  
        {/* Modal for reservation summary */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              {isReservationConfirmed ? (
                <>
                  <h3>Reservation Confirmed!</h3>
                  <p>Thank you for your reservation.</p>
                  <button onClick={handleBackToHome} className="modal-button">
                    Back to Home
                  </button>
                </>
              ) : (
                <>
                  <h3>Reservation Summary</h3>
                  <p>Date: {date}</p>
                  <p>Time: {time}</p>
                  <p>Guests: {guests}</p>
                  <p>Occasion: {occasion}</p>
                  <p>Seating Preference: {seatPreference}</p> {/* Display the seating preference */}
                  <button onClick={handleConfirmReservation} className="modal-button">
                    Confirm Reservation
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </>
    );
}

export default BookingForm;
