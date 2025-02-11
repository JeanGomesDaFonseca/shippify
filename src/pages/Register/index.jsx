import { useState } from "react";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

function Register({ open, handleClose }) {
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    cnpj: "",
    cidade: "",
    email: "",
    telefone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    handleClose(); // Fecha o modal após envio
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Cadastre sua Empresa</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField 
            fullWidth 
            label="Nome da Empresa" 
            name="nomeEmpresa"
            value={formData.nomeEmpresa}
            onChange={handleChange}
            margin="dense"
          />
          <TextField 
            fullWidth 
            label="CNPJ" 
            name="cnpj"
            value={formData.cnpj}
            onChange={handleChange}
            margin="dense"
          />
          <TextField 
            fullWidth 
            label="Cidade" 
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
            margin="dense"
          />
          <TextField 
            fullWidth 
            label="E-mail" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="dense"
          />
          <TextField 
            fullWidth 
            label="Telefone" 
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            margin="dense"
          />
          <DialogActions>
            <Button onClick={handleClose} color="secondary">Cancelar</Button>
            <Button type="submit" variant="contained" color="primary">Enviar</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default Register;
