import Wall from "./Wall";

export interface WallState {
  walls: Wall[];
  result: {
    paintRequiredLiters: number;
    suggestedCans: number[];
  } | null;
  setWall: (index: number, field: keyof Wall, value: number) => void;
  addWall: () => void;
  calculatePaintAndSetResult: () => Promise<void>;
  clearAllInputs: () => void;
  removeWall: (index: number) => void;
}
