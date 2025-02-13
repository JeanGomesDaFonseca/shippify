import React, { useState } from "react";
import { TextField, Button, Box, Typography, MenuItem, Container } from "@mui/material";
import Swal from "sweetalert2";
import InputMask from "react-input-mask";

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

    // Validação do telefone
    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!phoneRegex.test(formData.phone)) {
      Swal.fire("Erro", "Telefone inválido. Use o formato (xx) xxxxx-xxxx.", "error");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/drivers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        Swal.fire("Sucesso", "Motorista cadastrado com sucesso!", "success");
        setFormData({
          companyId: "",
          cityId: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          avatarUrl: "",
          status: "active",
        });
      } else {
        console.error("Erro ao cadastrar motorista:", data.message);
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Container maxWidth="sm">
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
            placeholder="ID da Empresa"
          />
          <TextField
            label="ID da Cidade"
            name="cityId"
            value={formData.cityId}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            placeholder="ID da Cidade"
          />
          <TextField
            label="Nome"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            placeholder="Nome"
          />
          <TextField
            label="Sobrenome"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            placeholder="Sobrenome"
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
            placeholder="E-mail"
          />
          <InputMask
            mask="(99) 99999-9999"
            value={formData.phone}
            onChange={handleChange}
          >
            {() => (
              <TextField
                label="Telefone"
                name="phone"
                fullWidth
                margin="normal"
                required
                placeholder="Telefone"
              />
            )}
          </InputMask>
          <TextField
            label="Avatar URL"
            name="avatarUrl"
            value={formData.avatarUrl}
            onChange={handleChange}
            fullWidth
            margin="normal"
            placeholder="Avatar URL"
          />
          <TextField
            select
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            fullWidth
            margin="normal"
            placeholder="Status"
          >
            <MenuItem value="active">Ativo</MenuItem>
            <MenuItem value="inactive">Inativo</MenuItem>
          </TextField>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Cadastrar
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Register;