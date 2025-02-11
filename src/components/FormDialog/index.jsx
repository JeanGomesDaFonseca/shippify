/* eslint-disable react/prop-types */
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions } from "@mui/material";

function FormDialog({ open, onClose }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Dados enviados:", formData);
    onClose(); // Fecha o pop-up
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Cadastro</DialogTitle>
      <DialogContent>
        <TextField fullWidth margin="dense" label="Nome" name="nome" value={formData.nome} onChange={handleChange} />
        <TextField
          fullWidth
          margin="dense"
          label="E-mail"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField fullWidth margin="dense" label="Telefone" name="telefone" value={formData.telefone} onChange={handleChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSubmit} color="primary">
          Enviar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialog;
