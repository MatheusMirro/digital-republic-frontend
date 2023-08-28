import styled from "styled-components";

const Container = styled.div`
  /* Responsividade */
  @media (max-width: 1024px) {
    /* Estilos responsivos para labels */
    .label-width,
    .label-height,
    .label-doors,
    .label-windows {
      order: 1;
      text-align: left;
    }

    h1 {
      font-size: 35px;
      text-align: center;
    }

    input {
      display: flex;
      width: 90%;
      margin: 10px;
    }

    svg {
      font-size: 45px;
      margin-left: 270px;
    }
  }

  @media (max-width: 768px) {
    /* Estilos responsivos para labels */
    .label-width,
    .label-height,
    .label-doors,
    .label-windows {
      order: 1;
      text-align: left;
    }

    h1 {
      font-size: 24px;
      text-align: center;
    }

    input {
      display: flex;
      width: 80%;
      margin: 10px;
    }

    svg {
      font-size: 35px;
      margin-left: 190px;
    }
  }

  @media (max-width: 480px) {
    /* Estilos responsivos para labels */
    .label-width,
    .label-height,
    .label-doors,
    .label-windows {
      order: 1;
      text-align: left;
    }

    h1 {
      text-align: center;
      font-size: 20px;
    }

    input {
      width: 50%;
      margin: 5px;
      margin-left: 100px;
    }

    label {
      margin-left: 100px;
    }

    svg {
      display: flex;
      font-size: 30px;
      margin-left: 170px;
    }
  }

  @media (max-width: 425px) {
    /* Estilos responsivos para labels */
    .label-width,
    .label-height,
    .label-doors,
    .label-windows {
      order: 1;
      text-align: left;
    }

    h1 {
      text-align: center;
      font-size: 20px;
    }

    input {
      width: 50%;
      margin: 5px;
      margin-left: 100px;
    }

    label {
      margin-left: 100px;
    }

    svg {
      display: flex;
      font-size: 30px;
      margin-left: 185px;
    }
  }

  @media (max-width: 375px) {
    /* Estilos responsivos para labels */
    .label-width,
    .label-height,
    .label-doors,
    .label-windows {
      order: 1;
      text-align: left;
    }

    h1 {
      text-align: center;
      font-size: 20px;
    }

    input {
      width: 50%;
      margin: 5px;
      margin-left: 100px;
    }

    label {
      margin-left: 100px;
    }

    svg {
      display: flex;
      font-size: 30px;
      margin-left: 170px;
    }
  }

  @media (max-width: 320px) {
    /* Estilos responsivos para labels */
    .label-width,
    .label-height,
    .label-doors,
    .label-windows {
      order: 1;
      text-align: left;
    }

    h1 {
      text-align: center;
      font-size: 20px;
    }

    input {
      width: 50%;
      margin: 5px;
      margin-left: 100px;
    }

    label {
      margin-left: 100px;
    }

    svg {
      display: flex;
      font-size: 30px;
      margin-left: 170px;
    }
  }
`;
export default Container;
