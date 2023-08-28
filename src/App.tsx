import React from "react";
import { MyComponent } from "./pages/CalculationsPage";
import Container from "../src/components/Container";
import GlobalStyle from "./styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <MyComponent />
      </Container>
    </>
  );
};

export default App;
