import axios from "axios";
import API_URL from "@/constants/api_url";

const fromLocalHost = false;

const api_url = fromLocalHost
  ? "http://localhost:8080/api/recrutement/"
  : API_URL.api_recrutement;

const postRecrutement = async (presentation: any, personnages: any) => {
  return axios.post(api_url + "post", {
    presentation,
    personnages,
  });
};

const getAllRecrutement = async () => {
  return axios.get(api_url + "getAll");
};

const RecrutementService = {
  postRecrutement,
  getAllRecrutement,
};

export default RecrutementService;
