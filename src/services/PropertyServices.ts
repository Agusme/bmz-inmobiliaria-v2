// services/PropertyServices.ts
import axios from "axios";
const API_BASE_URL = "https://backend-bmz.vercel.app/api";

export const createProperty = async (formData: FormData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/property`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error en createProperty: ", error);
    throw error;
  }
};
