import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const create = (newObj) => {
  return axios.post(baseUrl, newObj);
};

const getAll = () => {
  return axios.get(baseUrl);
};

const delContact = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default { create, getAll, delContact };
