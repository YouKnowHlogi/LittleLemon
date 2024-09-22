import React from 'react';
import './App.css'; // CSS styles

function Main() {
  return (
    <main>
    
      {/* Title Section */}
      <section className="title-section">
        <h2>Welcome to Little Lemon</h2>
        <p>
        Feeling hungry? Let us satisfy your cravings! Browse through our mouth-watering categories and find the perfect dish to suit your taste buds. Whether you're in the mood for something savory, sweet, or everything in between, we've got it covered. Just a few taps and your delicious meal will be on its way to you. Fast, fresh, and made just for you—order now and enjoy every bite!</p>
      </section>

      {/* Card Section */}
      <section className="card-section">
        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/GrilledChicken.webp`} alt="Automotive" />
          <h3>Mediterranean Grilled Chicken Salad</h3>
          <p>Grilled chicken breast, Mixed greens (arugula, spinach, and romaine), Cucumbers, Cherry tomatoes, Kalamata olives, Red onions, Feta cheese, Lemon vinaigrette dressing and Pita croutons</p>
          <div className="card-buttons">
            <button className="order-button">Order Now</button>
            <button className="info-button">More Info</button>
          </div>
        </div>

        <div className="card">
        <img src={`${process.env.PUBLIC_URL}/BeefWrap.webp`} alt="Automotive" />
        <h3>Spicy Beef Shawarma Wrap</h3>
          <p>Marinated beef strips, Warm pita bread, Garlic tahini sauce, Pickled cucumbers, Tomatoes, Lettuce, Red onions, Hummus spread and Hot chili sauce (optional for extra spice)</p>
          <div className="card-buttons">
            <button className="order-button">Order Now</button>
            <button className="info-button">More Info</button>
          </div>
        </div>

        <div className="card">
        <img src={`${process.env.PUBLIC_URL}/Pizza.webp`} alt="Automotive" />
          <h3>Classic Margherita Pizza</h3>
          <p>Homemade pizza dough, Fresh mozzarella cheese, Tomato sauce (San Marzano tomatoes), Fresh basil leaves, Extra virgin olive oil, Sea salt and Cracked black pepper for an extra kick!</p>
          <div className="card-buttons">
            <button className="order-button">Order Now</button>
            <button className="info-button">More Info</button>
          </div>
        </div>

        <div className="card">
        <img src={`${process.env.PUBLIC_URL}/PestoPasta.webp`} alt="Automotive" />
          <h3>Creamy Pesto Pasta with Grilled Vegetables</h3>
          <p>Fettuccine pasta, Homemade basil pesto (basil, pine nuts, parmesan, garlic, olive oil), Grilled zucchini, Grilled bell peppers, Cherry tomatoes, Fresh parmesan cheese and Crushed red pepper flakes (optional for heat)</p>
          <div className="card-buttons">
            <button className="order-button">Order Now</button>
            <button className="info-button">More Info</button>
          </div>
        </div>

        <div className="card">
        <img src={`${process.env.PUBLIC_URL}/ShrimpTaco.webp`} alt="Automotive" />
          <h3>Garlic Butter Shrimp Tacos</h3>
          <p>Shrimp (seasoned with garlic, butter, and lime), Corn tortillas, Shredded cabbage, Avocado slices, Cilantro, Pico de gallo, Lime crema (sour cream, lime juice, garlic powder) and Crumbled cotija cheese</p>
          <br></br>
          <div className="card-buttons">
            <button className="order-button">Order Now</button>
            <button className="info-button">More Info</button>
          </div>
        </div>

        <div className="card">
        <img src={`${process.env.PUBLIC_URL}/Table.webp`} alt="Automotive" />
          <h3>Reserve a Table</h3>
          <p>Craving an unforgettable dining experience? Make it even more special by reserving your table with us today! Whether it’s a casual meal with friends or a celebration with family, we’ve got the perfect spot waiting for you.</p>
          <br></br><div className="card-buttons">
            <button className="order-button">Book Now</button>
            <button className="info-button">More Info</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
