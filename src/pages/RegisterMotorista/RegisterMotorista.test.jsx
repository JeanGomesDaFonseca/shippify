import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Register from "./index";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Swal from "sweetalert2";

// Configurar o mock do axios
const mock = new MockAdapter(axios);
const mockData = {
  message: "Motorista cadastrado com sucesso!",
};

mock.onPost("http://localhost:5001/api/drivers/").reply(200, mockData);

jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));

describe("RegisterMotorista Component", () => {
  test("deve renderizar o formulário de cadastro de motorista", () => {
    render(<Register />);

    expect(screen.getByPlaceholderText("ID da Empresa")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("ID da Cidade")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Sobrenome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Telefone")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Avatar URL")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Status")).toBeInTheDocument();
  });

  test("deve exibir mensagem de erro ao cadastrar motorista com telefone inválido", async () => {
    render(<Register />);

    fireEvent.change(screen.getByPlaceholderText("ID da Empresa"), { target: { value: "1" } });
    fireEvent.change(screen.getByPlaceholderText("ID da Cidade"), { target: { value: "1" } });
    fireEvent.change(screen.getByPlaceholderText("Nome"), { target: { value: "John" } });
    fireEvent.change(screen.getByPlaceholderText("Sobrenome"), { target: { value: "Doe" } });
    fireEvent.change(screen.getByPlaceholderText("E-mail"), { target: { value: "john.doe@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Telefone"), { target: { value: "1234567890" } }); // Telefone inválido
    fireEvent.change(screen.getByPlaceholderText("Avatar URL"), { target: { value: "http://example.com/avatar.jpg" } });
    fireEvent.change(screen.getByPlaceholderText("Status"), { target: { value: "active" } });

    fireEvent.click(screen.getByText("Cadastrar"));

    await waitFor(() => {
      expect(Swal.fire).toHaveBeenCalledWith("Erro", "Telefone inválido. Use o formato (xx) xxxxx-xxxx.", "error");
    });
  });
});