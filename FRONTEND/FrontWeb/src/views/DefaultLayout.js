import { useState } from "react";
import { Barralateral } from "../components/BarraLateral";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/system";

const StyledContent = styled("div")(({ theme }) => ({
  marginLeft: "135px", // Ajusta según sea necesario
  flexGrow: 1,
}));

export const DefaultLayout = (props) => {
  const [open, setOpen] = useState(false);
  const { handleDeslogeado } = props;
  const handleBarraLateral = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Barralateral
        open={open}
        onClose={handleBarraLateral}
        logout={handleDeslogeado}
      />
      <StyledContent>
        <Outlet />
      </StyledContent>
    </div>
  );
};
