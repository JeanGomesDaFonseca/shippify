import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./index";

describe("Header Component", () => {
  test("deve renderizar o logo da Shippify", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const logoElement = screen.getByAltText("logo da shippify");
    expect(logoElement).toBeInTheDocument();
  });

  test("deve renderizar os links de navegação", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText("Cadastrar Motorista")).toBeInTheDocument();
    expect(screen.getByText("Cadastrar Veículo")).toBeInTheDocument();
  });
});
