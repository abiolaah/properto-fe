import React, { useEffect, useState } from 'react';
import actions from './../actions/counterActions'
import { useParams } from 'react-router-dom';
import "../App.css"
import ImageSlider from './ImageSlider';
const PropertyDetail = () => {
  
  const { id } = useParams();
    const [houseDetails, sethouseDetails] = useState([]);
  useEffect(() => {
    HouseDetails();  
  }, [])
  const HouseDetails =async()=>{
    const data =await actions.houseDetails(id);
    sethouseDetails(data.house)
  }
  
  if(houseDetails){
    console.log(houseDetails)
  }

  return (
    <div className="property-details-container">
      <header>
        <a className="home-button" href="/home"> Back
          {/* <img src="../../public/home-icon.png" alt="Home" /> */}
        </a>
        <h1>Reland Solution</h1>
        <p>Property Management</p>
      </header>
      <div className="container">
        {/* Property Details */}
        <div className="property-detail">
          <div className="property-header">
            <h2>{houseDetails.name}</h2>
            <button className="book-appointment-button">
              <a
                className="appointment-link"
                href="http://calendly.com/meet-us-we-are-reland-solution"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book an Appointment
              </a>
            </button>
          </div>
          <ImageSlider images={houseDetails.images} />
          <p>Address: {houseDetails.address}</p>
          <p>Property Type: {houseDetails.type}</p>
          <p>Bathroom: {houseDetails.bathrooms}</p>
          <p>Bedroom: {houseDetails.bedrooms}</p>
          <p>Description: {houseDetails.description}</p>
          <p>Square Feet: {houseDetails.squareFeet}</p>
          <p>Parking: {houseDetails.parking}</p>
          <p>Type: {houseDetails.status}</p>
          <p>Price: {houseDetails.price}</p>
        </div>

        
      </div>

      <footer>
        <p>Contact us at: contact@reland.com</p>
      </footer>
    </div>
  );
};
export default PropertyDetail;
