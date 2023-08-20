import React, { useEffect, useState } from 'react';
import actions from './../actions/counterActions'
import { useNavigate } from 'react-router-dom';
import ImageSlider from './ImageSlider';
const Home = () => {
  const history = useNavigate();
  const [searchOptionsVisible, setSearchOptionsVisible] = useState(false);
  const [housingData, sethousingData] = useState([]);

  const [searchParams, setsearchParams] = useState("");

  useEffect(() => {

    fetchHouses();
  }, [])
  const fetchHouses = async () => {
    try {
      const res = await actions.listHouses({ query: searchParams }); // Assuming "q" is the query parameter name on the API
      sethousingData(res.results);
    } catch (error) {
      console.error('Error fetching houses:', error);
    }
  };

  const viewDetails = (id) => {
    history(`/houses/${id}`);
  }

  const toggleSearchOptions = () => {
    setSearchOptionsVisible(!searchOptionsVisible);
  };
  const handleLocationChange = (e) => {
    setsearchParams({ ...searchParams, address: e.target.value });
  };

  const searchProperties = (e) => {
    e.preventDefault();
    fetchHouses();
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

        <div className={searchOptionsVisible ? 'search-container active' : 'search-container'} id="searchOptions">
          <h2>Find Properties</h2>
          <form className="search-form" onSubmit={searchProperties}>
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" onChange={handleLocationChange} placeholder="Enter a location" />



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
          {
            !housingData.length ? (<>Loading..</>) : (
              <>
                {housingData.map((house) => (
                  <div className="property-card" data-location="Scarborough" data-property-type="house" data-price="500000">
                    {/* <img src="property-image-1.jpg" alt="Property 1" /> */}
                    <ImageSlider images={house.images} />
                    <div className="property-details">
                      <h3>{house.name}</h3>
                      <p>Address : {house.address}</p>
                      <p>Property Type: House</p>
                      <p>Price: {house.price}</p>
                      <button onClick={() => viewDetails(house._id)}>
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )


          }

        </div>
        {/* <p>
          Already have an account? <a href="/login">Login here</a>
        </p> */}
      </div>

      <footer>
        <p>Contact us at: contact@reland.com</p>
      </footer>
    </div>
  );
};

export default Home;
