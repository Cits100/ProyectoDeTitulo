import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Barralateral = ({ open, onClose, logout }) => {
  const navigate = useNavigate();
  return (
    <Drawer variant="permanent" open={open}>
      <IconButton onClick={onClose}>
        {open ? (
          <ChevronLeftIcon sx={{ color: "black" }} />
        ) : (
          <MenuRoundedIcon sx={{ color: "black" }} />
        )}
      </IconButton>
      <List
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%", // Añadido para ocupar el 100% del alto disponible
          paddingLeft: "30px",
          paddingTop: "40px",
        }}
      >
        <ListItem>
          <Button
            onClick={() => {
              navigate("/formularioEventos");
            }}
            fullWidth
          >
            <ListItemIcon>
              <CalendarMonthOutlinedIcon sx={{ color: "black" }} />
            </ListItemIcon>
            {open && <ListItemText primary="Inbox" />}
          </Button>
        </ListItem>

        {/* <ListItem>
          <Button onClick={onClose} fullWidth>
            <ListItemIcon>
              <MailIcon sx={{ color: "black" }} />
            </ListItemIcon>
            {open && <ListItemText primary="Mail" />}
          </Button>
        </ListItem> */}
      </List>
      <List
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%", // Añadido para ocupar el 100% del alto disponible
          marginTop: "auto", // Utiliza marginTop:auto para que se ajuste al final
          paddingLeft: "30px",
        }}
      >
        <ListItem style={{ marginTop: "auto" }}>
          <Button onClick={logout} fullWidth>
            <ListItemIcon>
              <ExitToAppRoundedIcon sx={{ color: "black" }} />
            </ListItemIcon>
            {open && <ListItemText primary="Salir" />}
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
};
