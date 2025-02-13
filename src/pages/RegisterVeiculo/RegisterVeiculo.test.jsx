import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RegisterVeiculo from "./index";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Swal from "sweetalert2";

// Configurar o mock do axios
const mock = new MockAdapter(axios);
const mockData = {
  message: "Veículo cadastrado com sucesso!",
};

mock.onPost("http://localhost:5001/api/vehicles/").reply(200, mockData);

jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));

describe("RegisterVeiculo Component", () => {
  test("deve renderizar o formulário de cadastro de veículo", () => {
    render(<RegisterVeiculo />);

    expect(screen.getByPlaceholderText("ID da Empresa")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("ID do Motorista")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Modelo do Veículo")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Placa")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Tipo")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Capacidade")).toBeInTheDocument();
  });
});
