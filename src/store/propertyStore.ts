import { create } from "zustand";
import { Property } from "../types/PropertyTypes";
import { getProperties } from "../services/PropertyServices";

type PropertyStore = {
  propiedades: Property[];
  loading: boolean;
  fetchProperties: () => Promise<void>;
};
export const usePropertyStore = create<PropertyStore>((set) => ({
  propiedades: [],
  loading: false,

  fetchProperties: async () => {
    set({ loading: true });
    try {
      const data = await getProperties();
      set({ propiedades: data });
    } catch (error) {
      console.error("Error al obtener propiedades:", error);
    } finally {
      set({ loading: false });
    }
  },
}));
