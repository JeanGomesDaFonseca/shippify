import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./index";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Configurar o mock do axios
const mock = new MockAdapter(axios);
const mockData = [
  {
    driver_first_name: "John",
    driver_last_name: "Doe",
    vehicle_model: "Model X",
    vehicle_plate: "ABC-1234",
    company_name: "Shippify",
  },
  // Adicione mais dados de mock conforme necessário
];

mock.onGet("http://localhost:5001/api/data").reply(200, mockData);

describe("Home Component", () => {
  test("deve renderizar a tabela de motoristas, veículos e empresas", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    // Verificar se os cabeçalhos da tabela estão presentes
    expect(screen.getByText("Nome do Motorista")).toBeInTheDocument();
    expect(screen.getByText("Sobrenome do Motorista")).toBeInTheDocument();
    expect(screen.getByText("Modelo do Veículo")).toBeInTheDocument();
    expect(screen.getByText("Placa")).toBeInTheDocument();
    expect(screen.getByText("Empresa")).toBeInTheDocument();

    // Verificar se os dados da tabela estão presentes
    expect(await screen.findByText("John")).toBeInTheDocument();
    expect(await screen.findByText("Doe")).toBeInTheDocument();
    expect(await screen.findByText("Model X")).toBeInTheDocument();
    expect(await screen.findByText("ABC-1234")).toBeInTheDocument();
    expect(await screen.findByText("Shippify")).toBeInTheDocument();
  });
});