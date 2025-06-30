// services/PropertyServices.ts
import axios from "axios";
import { Property } from "../types/PropertyTypes";
const API_BASE_URL = "https://backend-bmz.vercel.app/api";

export const createProperty = async (formData: FormData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/property`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error en createProperty: ", error);
    throw error;
  }
};

export const getProperties = async (): Promise<Property[]> => {
  try {
    const res = await axios.get(`${API_BASE_URL}/property`);
    return res.data;
  } catch (error) {
    console.error("Error al obtener las propiedades:", error);
    throw error;
  }
};

export const deletePropertyService = async (id: string) => {
  try {
    const res = await axios.delete(`${API_BASE_URL}/property/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error al eliminar propiedad:", error);
    throw error;
  }
};
