import React, { useEffect, useState } from 'react'
import "../App.css"
import actions from './../actions/counterActions'
import { useNavigate, useParams } from 'react-router-dom';
export default function Edit() {
    const history = useNavigate();
    const { id } = useParams();

  const [houseData, sethouseData] = useState({name: "",
    address: "",
    type: "",
    status: "For sale",
    price: "",
    bedrooms: "",
    bathrooms: "",
    parking: "",
    description: "",
    squareFeet: "",})

    useEffect(() => {
        HouseDetails();  
      }, [])
      const HouseDetails =async()=>{
        const data =await actions.houseDetails(id);
        sethouseData(data.house)
      }
  const handleSubmit =async (event) => {
    event.preventDefault();
    // Perform form submission logic here
    await actions.updateHouse(id,houseData);
    history("/");
  };


  return (
    <div className="add-house-form-container">
    <header>
      <h1>Edit House Details</h1>
      <p>Property Management</p>
    </header>
    <div className="container">
      <h2>Add a New House</h2>

      {/* Add House Form */}
      <form id="addHouseForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="property-name">Property Name:</label>
          <input type="text" id="property-name" name="property-name" value={houseData.name} onChange={(e) => sethouseData({ ...houseData, name: e.target.value })} required />
        </div>

        <div className="form-group">
          <label htmlFor="images">Description :</label>
          <input type="text" id="property-name" name="property-name" value={houseData.description}  onChange={(e) => sethouseData({ ...houseData, description: e.target.value })} required />
       </div>

        <div className="form-group">
          <label htmlFor="location">Address : </label>
          <input type="text" id="property-name" name="property-name" value={houseData.address}  onChange={(e) => sethouseData({ ...houseData, address: e.target.value })} required />
        </div>

        <div className="form-group">
          <label htmlFor="property-type">Property Type:</label>
          <input type="text" id="property-name" name="property-name" value={houseData.type}  onChange={(e) => sethouseData({ ...houseData, type: e.target.value })} required />

        </div>

        <div className="form-group">
          <label htmlFor="price">Price ($):</label>
          <input type="text" id="property-name" name="property-name" value={houseData.price}  onChange={(e) => sethouseData({ ...houseData, price: e.target.value })} required />
        </div>

        <div className="form-group">
          <label htmlFor="price">Bedroom :</label>
          <input type="text" id="property-name" name="property-name" value={houseData.bedrooms}  onChange={(e) => sethouseData({ ...houseData, bedrooms: e.target.value })} required />
        </div>

        <div className="form-group">
          <label htmlFor="price">Bathroom :</label>
          <input type="text" id="property-name" name="property-name" value={houseData.bathrooms}  onChange={(e) => sethouseData({ ...houseData, bathrooms: e.target.value })} required />
     </div>

        <div className="form-group">
          <label htmlFor="price">Parking :</label>
          <input type="text" id="property-name" name="property-name" value={houseData.parking}  onChange={(e) => sethouseData({ ...houseData, parking: e.target.value })} required />
       </div>

        <div className="form-group">
          <label htmlFor="images">Status :</label>
          <input type="text" id="property-name" name="property-name" value={houseData.status}  onChange={(e) => sethouseData({ ...houseData, type: e.target.value })} required />
        </div>

        <div className="form-group">
          <label htmlFor="images">Square Feet :</label>
          <input type="text" id="property-name" name="property-name"  value={houseData.squareFeet} onChange={(e) => sethouseData({ ...houseData, squareFeet: e.target.value })} required />
        </div>

        <div className="form-group">
          <label htmlFor="images">Images:</label>
          <input type="file" id="images" name="images" multiple accept="image/*" />
        </div>

        <button type="submit">Update House</button>
      </form>
    </div>

    <footer>
      <p>Contact us at: contact@reland.com</p>
    </footer>
  </div>
  )
}
