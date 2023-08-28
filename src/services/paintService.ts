import Wall from "../models/Wall";
import api from "./api";

interface CalculatePaintResponse {
  paintRequiredLiters: number;
  suggestedCans: number[];
}

export const calculatePaint = async (
  walls: Wall[]
): Promise<CalculatePaintResponse> => {
  try {
    const response = await api.post("/paint/calculate", {
      walls,
    });

    return response.data;
  } catch (error) {
    console.error("Error calculating paint:", error);
    throw error;
  }
};
