import * as api from "../api/index";

// Action Creators

const actions = {
  listHouses : async (params) => {
    try {
      const { data } = await api.listHouses(params);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  houseDetails :async (id) => {
    try {
      const { data } = await api.houseDetails(id);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  addHouse :async (formData) => {
    try {
      const { data } = await api.addHouse(formData);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  updateHouse :async (id,formData) => {
    try {
      console.log(id,formData)
      const { data } = await api.updateHouse(id,formData);
      console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};
export default actions;


