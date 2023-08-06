import React, { useState } from 'react';

const Home = () => {
  const [searchOptionsVisible, setSearchOptionsVisible] = useState(false);

  const toggleSearchOptions = () => {
    setSearchOptionsVisible(!searchOptionsVisible);
  };

  const searchProperties = (event) => {
    event.preventDefault(); // Prevent form submission

    const locationInput = event.target.location.value.toLowerCase();
    const propertyTypeInput = event.target['property-type'].value.toLowerCase();
    const minPriceInput = parseFloat(event.target['min-price'].value);
    const maxPriceInput = parseFloat(event.target['max-price'].value);

    const propertyCards = document.querySelectorAll('.property-card');

    propertyCards.forEach((card) => {
      const cardLocation = card.getAttribute('data-location').toLowerCase();
      const cardPropertyType = card.getAttribute('data-property-type').toLowerCase();
      const cardPrice = parseFloat(card.getAttribute('data-price'));

      const matchesLocation = locationInput === '' || cardLocation.includes(locationInput);
      const matchesPropertyType = propertyTypeInput === '' || cardPropertyType === propertyTypeInput;
      const matchesMinPrice = isNaN(minPriceInput) || cardPrice >= minPriceInput;
      const matchesMaxPrice = isNaN(maxPriceInput) || cardPrice <= maxPriceInput;

      if (matchesLocation && matchesPropertyType && matchesMinPrice && matchesMaxPrice) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  };

  return (
    <div>
      <header>
        <h1>Reland Solution</h1>
        <p>Property Management</p>
      </header>
      <div className="container">
        <h2>Welcome to Reland Solution</h2>
        <button className="search-button" onClick={toggleSearchOptions}></button>

        {/* Search Form (Hidden by Default) */}
        <div className={searchOptionsVisible ? 'search-container active' : 'search-container'} id="searchOptions">
          <h2>Find Properties</h2>
          <form className="search-form" onSubmit={searchProperties}>
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" placeholder="Enter a location" />

            <label htmlFor="property-type">Property Type:</label>
            <select id="property-type">
              <option value="">Any</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              {/* Add more property types as needed */}
            </select>

            <label htmlFor="min-price">Min Price:</label>
            <input type="text" id="min-price" placeholder="Enter minimum price" />

            <label htmlFor="max-price">Max Price:</label>
            <input type="text" id="max-price" placeholder="Enter maximum price" />

            <button type="submit">Search</button>
          </form>
        </div>

        {/* Property Listings */}
        <div className="property-listing">
          {/* Property Card 1 */}
          <div className="property-card" data-location="Scarborough" data-property-type="house" data-price="500000">
            <img src="property-image-1.jpg" alt="Property 1" />
            <div className="property-details">
              <h3>Property 1</h3>
              <p>Location: Scarborough</p>
              <p>Property Type: House</p>
              <p>Price: $500,000</p>
              <button>
                <a href="Property_detail1.html">View Details</a>
              </button>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="property-card" data-location="London" data-property-type="House" data-price="450000">
            <img src="property-image-2.jpg" alt="Property 2" />
            <div className="property-details">
              <h3>Property 2</h3>
              <p>Location: London</p>
              <p>Property Type: Apartment</p>
              <p>Price: $450,000</p>
              <button>View Details</button>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="property-card" data-location="Etobicoke" data-property-type="House" data-price="490000">
            <img src="property-image-3.jpg" alt="Property 3" />
            <div className="property-details">
              <h3>Property 3</h3>
              <p>Location: Etobicoke</p>
              <p>Property Type: Condo</p>
              <p>Price: $490,000</p>
              <button>View Details</button>
            </div>
          </div>
        </div>
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>

      <footer>
        <p>Contact us at: contact@reland.com</p>
      </footer>
    </div>
  );
};

export default Home;
