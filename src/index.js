import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import Card from "./components/Card";
import Container from "./components/Container";
import KawaiiAnimation from "./components/KawaiiAnimation";

function App() {
  return (
    <Container>
      <Normalize />
      <Card>
        <KawaiiAnimation />
      </Card>
      <h2>Hello there! My name is Anideep!!</h2>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
