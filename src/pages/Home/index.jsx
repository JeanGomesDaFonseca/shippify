import { useState } from "react";
import { Button } from "@mui/material";
import FormDialog from "../components/FormDialog"; 

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bem-vindo ao Shippify</h1>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Cadastro
      </Button>

      {/* Pop-up do formulário */}
      <FormDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default Home;
