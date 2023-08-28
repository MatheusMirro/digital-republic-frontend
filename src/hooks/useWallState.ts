import { useState } from "react";
import Wall from "../models/Wall";
import { WallState } from "../models/WallState";
import { calculatePaint } from "../services/paintService";

const useWallState = (): WallState => {
  const [walls, setWalls] = useState<Wall[]>([
    { width: 0, height: 0, numDoors: 0, numWindows: 0 },
  ]);

  const [result, setResult] = useState<{
    paintRequiredLiters: number;
    suggestedCans: number[];
  } | null>(null);

  const setWall = (index: number, field: keyof Wall, value: number) => {
    const updatedWalls = [...walls];
    updatedWalls[index][field] = value;
    setWalls(updatedWalls);
  };

  const addWall = () => {
    setWalls([...walls, { width: 0, height: 0, numDoors: 0, numWindows: 0 }]);
  };

  const clearAllInputs = () => {
    const initialInputState: Wall = {
      width: 0,
      height: 0,
      numDoors: 0,
      numWindows: 0,
    };
    setWalls([initialInputState]);
    setResult(null);
  };

  const removeWall = (index: number) => {
    const updatedWalls = [...walls];
    updatedWalls.splice(index, 1);
    setWalls(updatedWalls);
  };

  const calculatePaintAndSetResult = async () => {
    try {
      const paintResult = await calculatePaint(walls);
      setResult(paintResult);
    } catch (error) {
      console.error("Error calculating paint:", error);
    }
  };

  return {
    walls,
    result,
    setWall,
    addWall,
    calculatePaintAndSetResult,
    clearAllInputs,
    removeWall,
  };
};

export default useWallState;
