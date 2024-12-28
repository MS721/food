import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login1 from './LoginSignUp.js';
import { AuthProvider } from './AuthProvider';
import ExploreMore from './Explore';
import MyProfile from './MyProfile';
import History from './History';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);  // To handle the selected image

  // Simulate preloader timeout
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Gallery images with info
  const galleryImages = [
    {
      src: "https://as1.ftcdn.net/v2/jpg/02/74/56/92/1000_F_274569206_m5ZaXzmkozpRwUGagSgHvkeGGj2jy2Wb.jpg",
      info: "A delicious plate of pasta garnished with fresh herbs.",
    },
    {
      src: "https://as2.ftcdn.net/v2/jpg/02/12/69/59/1000_F_212695921_GaiXzq0hWQHwAtNzTNkEu7HYKpBfcgmj.jpg",
      info: "A bowl of fresh salad with a tangy dressing.",
    },
    {
      src: "https://t4.ftcdn.net/jpg/11/03/98/67/240_F_1103986775_hGG655a1Uay9XHRy312NWP6lt76iJYzX.jpg",
      info: "it's pastry time!",
    },
    {
      src: "https://t3.ftcdn.net/jpg/09/27/12/22/240_F_927122256_PfoOcHkdYR1xZG0corogfyQqqbvQY3gW.jpg",
      info: "A sweet plate",
    },
    {
      src: "https://as2.ftcdn.net/v2/jpg/09/18/18/01/1000_F_918180156_9ASMxGef4SVJqzhabZoxMO6Xm3gibScx.jpg",
      info: "tea time .",
    },
    {
      src: "https://t3.ftcdn.net/jpg/05/27/74/24/240_F_527742446_jLu7mDKK1Qx38xppfJZhDxWbBd2jTJAG.jpg",
      info: "sabji and puri.",
    },
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Handle search bar input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Router>
      <AuthProvider>
        <div className="App">
          {/* Preloader */}
          {isLoading ? (
            <div className="preloader">
              <video className="preloader-video" autoPlay loop muted>
                <source src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/coffee-cup-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--hot-food-beverage-pack-drink-icons-6248142.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <>
              {/* Navbar */}
              <nav className="navbar">
                <div className="logo">Foodies' Haven</div>
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-bar"
                  />
                </div>
                <ul className="nav-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/my-profile">My Profile</Link></li>
                  <li><Link to="/login-signup">Login/Sign Up</Link></li>
                  <li><Link to="/history">History</Link></li>
                  <li><Link to="/explore">Explore</Link></li>
                </ul>
              </nav>

              {/* Routes */}
              <Routes>
                <Route path="/login-signup" element={<Login1 />} />
                <Route path="/" element={
                  <>
                    {/* Recipe Gallery */}
                    <section className="gallery">
                      <h2>Recipe Gallery</h2>
                      <Slider {...sliderSettings}>
                        {galleryImages.map((image, index) => (
                          <div
                            key={index}
                            className="image-container"
                            onClick={() => setSelectedImage(image)} // Set selected image on click
                          >
                            <img
                              src={image.src}
                              alt={`Dish ${index + 1}`}
                              className="gallery-image"
                            />
                          </div>
                        ))}
                      </Slider>
                    </section>

                    {/* Popular Dishes */}
                    <section className="popular-dishes">
                      <h2>Popular Dishes</h2>
                      <table className="dish-table">
                        <thead>
                          <tr>
                            <th>Meal</th>
                            <th>Veg</th>
                            <th>Non-Veg</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Breakfast</td>
                            <td>Paneer Paratha</td>
                            <td>Chicken Sandwich</td>
                          </tr>
                          <tr>
                            <td>Lunch</td>
                            <td>Veg Biryani</td>
                            <td>Butter Chicken</td>
                          </tr>
                          <tr>
                            <td>Evening Snacks</td>
                            <td>Veg Cutlets</td>
                            <td>Fish Fingers</td>
                          </tr>
                          <tr>
                            <td>Dinner</td>
                            <td>Palak Paneer</td>
                            <td>Grilled Chicken</td>
                          </tr>
                        </tbody>
                      </table>
                    </section>

                    {/* Recipe of the Week */}
                    <section className="recipe-week">
                      <h2>Recipe of the Week</h2>
                      <div className="recipe-cards">
                        <div className="recipe-card">
                          <h3>Special Veggie Delight</h3>
                          <p>A mix of fresh veggies with a tangy twist. Perfect for any occasion!</p>
                        </div>
                        <div className="recipe-card">
                          <h3>Spicy Chicken Curry</h3>
                          <p>A flavorful curry packed with spices and tender chicken.</p>
                        </div>
                        <div className="recipe-card">
                          <h3>Classic Pasta</h3>
                          <p>Rich, creamy pasta with a touch of herbs and cheese.</p>
                        </div>
                        <div className="recipe-card">
                          <h3>Chocolate Lava Cake</h3>
                          <p>Delicious molten lava cake for dessert lovers!</p>
                        </div>
                      </div>
                    </section>

                    {/* Footer */}
                    <footer className="footer">
                      <p>&copy; 2024 Foodies' Haven. All rights reserved.</p>
                    </footer>
                  </>
                } />
                <Route path="/explore" element={<ExploreMore />} />
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/history" element={<History />} />
              </Routes>
            </>
          )}

          {/* Modal for selected image */}
          {selectedImage && (
            <div className="image-modal" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={selectedImage.src} alt="Enlarged" className="modal-image" />
                <div className="modal-info">
                  <p>{selectedImage.info}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
