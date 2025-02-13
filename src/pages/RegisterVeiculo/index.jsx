import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import Swal from "sweetalert2";

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
        Swal.fire("Sucesso", "Veículo cadastrado com sucesso!", "success");
        setFormData({
          companyId: "",
          driverId: "",
          model: "",
          plate: "",
          type: "",
          capacity: "",
        });
      } else {
        Swal.fire("Erro", `Erro: ${data.message}`, "error");
      }
    } catch (error) {
      Swal.fire("Erro", "Erro ao conectar com o servidor.", "error");
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Container maxWidth="sm">
        <Typography variant="h5" gutterBottom>
          Cadastro de Veiculo
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
          <TextField fullWidth label="Placa" name="plate" value={formData.plate} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Tipo" name="type" value={formData.type} onChange={handleChange} margin="normal" />
          <TextField
            fullWidth
            label="Capacidade"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Cadastrar
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default RegisterVeiculo;