import React, { useEffect, useState } from 'react'
import "../App.css"
import actions from './../actions/counterActions'
import { useNavigate } from 'react-router-dom';
export default function Admin() {
  const history = useNavigate();
  const [housingData, sethousingData] = useState([]);

  const [searchParams, setsearchParams] = useState("");

  var i=1;
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
  const handleView = async (id) =>{
    history(`/houses/${id}`); 
  }
  const handleEdit = async (id) =>{
    history(`/edit/${id}`); 
  }
  return (
    <div>
        <header>
          <h1>Admin Dashboard</h1>
          <p>Property Management</p>
        </header>
        <div className="container">
          <h2>Property Listings</h2>

          {/* Property Listings Table */}
          <table>
            <tr>
              <th>ID</th>
              <th>{housingData.name}</th>
              <th>Location</th>
              <th>Property Type</th>
              <th>Price</th>
              <th className="actions">Actions</th>
            </tr>
            {
            !housingData.length ?(<>Loading..</>):(
              <>
              {housingData.map((house) => (
                 <tr>
                 <td>{i++}</td>
                 <td>{house.name}</td>
                 <td>{house.address}</td>
                 <td>{house.type}</td>
                 <td>{house.price}</td>
                 <td className="actions">
                   <a onClick={()=>handleView(house._id)} >View</a>
                   <a onClick={()=>handleEdit(house._id)}>Edit</a>
                 </td>
               </tr>
              ))}
              </>
           )


          }
            
           
           
            {/* Add more property rows as needed */}
          </table>

          <a href="/addhouse" className="add-house-button">Add House</a>
        </div>

        <footer>
          <p>Contact us at: contact@reland.com</p>
        </footer>
      </div>
  )
}
