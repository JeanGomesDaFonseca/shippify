import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const RegisterVeiculo = () => {
  const [formData, setFormData] = useState({
    companyId: "",
    driverId: "",
    model: "",
    plate: "",
    type: "",
    capacity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/vehicles/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Veículo cadastrado com sucesso!");
        setFormData({
          companyId: "",
          driverId: "",
          model: "",
          plate: "",
          type: "",
          capacity: "",
        });
      } else {
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Cadastro de Veículo
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="ID da Empresa"
          name="companyId"
          value={formData.companyId}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="ID do Motorista"
          name="driverId"
          value={formData.driverId}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Modelo do Veículo"
          name="model"
          value={formData.model}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Placa"
          name="plate"
          value={formData.plate}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Tipo"
          name="type"
          value={formData.type}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Capacidade"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Cadastrar Veículo
        </Button>
      </form>
    </Container>
  );
};

export default RegisterVeiculo;
