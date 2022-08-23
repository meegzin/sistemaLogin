import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuthenticator from "../../hooks/useAuthenticator";
import * as C from "./style";

const AdminPage = () => {
  const { signOut } = useAuthenticator();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>AdminPage</C.Title>
      <Button Text="Sair" onClick={() => [signOut(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default AdminPage;