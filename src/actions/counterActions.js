import * as api from "../api/index";

// Action Creators

const actions = {
  listHouses : async (params) => {
    try {
      console.log(params);

      const  data = await api.listHouses(params);
      return data?.data;
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

      return data;
    } catch (error) {
      console.log(error);
    }
  },

  deleteHouse :async (id) => {
    try {
      const { data } = await api.deleteHouse(id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

};
export default actions;


