import axios from 'axios'
const API = axios.create({baseURL:'http://localhost:4987'})

export const listHouses=(params)=> API.get(`/api/house/search`,{ params });
export const houseDetails=(id)=> API.get(`/api/house/details/${id}`);
export const addHouse=(formData)=> API.post(`/api/house/create`,{formData});
export const updateHouse=(id,formData)=> API.put(`/api/house/update/${id}`,{formData});
export const deleteHouse=(id)=> API.delete(`/api/house/delete/${id}`);
