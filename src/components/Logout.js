
import { Button } from "@mui/material";
import { clearUser } from "../services/user.service";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    clearUser();
    navigate("/login");
  };

  return (
    <Button color="primary" onClick={handleLogout}>
      LogOut
    </Button>
  );
}
