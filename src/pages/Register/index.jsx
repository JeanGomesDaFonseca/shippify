import React, { useState } from "react";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    companyId: "",
    cityId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    avatarUrl: "",
    status: "active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/api/drivers/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert("Motorista cadastrado com sucesso!");
      } else {
        alert("Erro ao cadastrar motorista: " + response.data.message);
      }
    } catch (error) {
      alert("Erro ao conectar ao servidor");
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Cadastro de Motorista
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="ID da Empresa"
          name="companyId"
          value={formData.companyId}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="ID da Cidade"
          name="cityId"
          value={formData.cityId}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Nome"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Sobrenome"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="E-mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Telefone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Avatar URL"
          name="avatarUrl"
          value={formData.avatarUrl}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField select label="Status" name="status" value={formData.status} onChange={handleChange} fullWidth margin="normal">
          <MenuItem value="active">Ativo</MenuItem>
          <MenuItem value="inactive">Inativo</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Cadastrar
        </Button>
      </form>
    </Box>
  );
};

export default Register;