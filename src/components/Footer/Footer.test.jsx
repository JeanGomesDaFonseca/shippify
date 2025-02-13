import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./index";

describe("Footer Component", () => {
  test("deve renderizar os links de navegação", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(screen.getByText("Shippers")).toBeInTheDocument();
    expect(screen.getByText("Termos de Uso")).toBeInTheDocument();
  });

  test("deve renderizar os ícones de mídia social", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("Twitter")).toBeInTheDocument();
    expect(screen.getByLabelText("Instagram")).toBeInTheDocument();
  });

  test("deve renderizar o texto de direitos autorais", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(screen.getByText("Entregas com ❤️ pela Shippify")).toBeInTheDocument();
    expect(screen.getByText("© 2025 Shippify, Inc. All Rights Reserved.")).toBeInTheDocument();
  });
});