import React from "react";
import Button from "../components/Button";
import StyledButtonContainer from "../components/ButtonContainer";
import FinalResult from "../components/FinalResult";
import LabelStyled from "../components/Label";
import TitleDigital from "../components/Title";
import Separator from "../components/Separator";
import InputStyled from "../components/Input";
import useWallState from "../hooks/useWallState";
import { FiTrash } from "react-icons/fi";

export const MyComponent: React.FC = () => {
  const {
    walls,
    result,
    addWall,
    setWall,
    calculatePaintAndSetResult,
    clearAllInputs,
    removeWall,
  } = useWallState();

  return (
    <div>
      <TitleDigital>Digital Republic Code Challenge</TitleDigital>
      {walls.map((wall, index) => (
        <div key={index}>
          <LabelStyled>Largura</LabelStyled>
          <InputStyled
            type="number"
            className="label-width"
            value={wall.width}
            onChange={(e) =>
              setWall(index, "width", parseFloat(e.target.value))
            }
          />

          <LabelStyled>Altura</LabelStyled>
          <InputStyled
            type="number"
            className="label-height"
            value={wall.height}
            onChange={(e) =>
              setWall(index, "height", parseFloat(e.target.value))
            }
          />
          <LabelStyled>Portas</LabelStyled>
          <InputStyled
            type="number"
            className="label-doors"
            value={wall.numDoors}
            onChange={(e) =>
              setWall(index, "numDoors", parseInt(e.target.value))
            }
          />
          <LabelStyled>Janelas</LabelStyled>

          <InputStyled
            type="number"
            className="label-windows"
            value={wall.numWindows}
            onChange={(e) =>
              setWall(index, "numWindows", parseInt(e.target.value))
            }
          />
          <Button remove onClick={() => removeWall(index)}>
            <FiTrash />
          </Button>
          <Separator />
        </div>
      ))}

      <StyledButtonContainer>
        <Button primary onClick={addWall}>
          Adicionar Parede
        </Button>

        <Button secondary onClick={calculatePaintAndSetResult}>
          Calcular Tinta
        </Button>

        <Button tertiary onClick={clearAllInputs}>
          Limpar Inputs
        </Button>
      </StyledButtonContainer>
      {result !== null && (
        <FinalResult className="final-response">
          <p>Quantidade de Tinta: {result.paintRequiredLiters} litros</p>
          <p>Latas de Tinta Sugeridas: {result.suggestedCans.join(", ")}</p>
        </FinalResult>
      )}
    </div>
  );
};
