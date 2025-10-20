import React, { useState } from "react";
import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  Box,
  useTheme,
  IconButton,
} from "@mui/material";
import { Home, Person, Search, Menu } from "@mui/icons-material";
import { DrawerComponent } from "./DrawerComponent";

interface DashboardBarProps {
  title?: string;
}

const drawerWidth = 240;

const DashboardPage: React.FC<DashboardBarProps> = ({
  title = "SignClass",
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  
  function toggleDrawer(newOpen: boolean) {
    setOpen(newOpen);
  }

  const menuItemLinks: Array<[React.ReactNode, string]> = [
    [<Home />, "Home"],
    [<Person />, "Person"],
    [<Search />, "Search"],
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: '100%', // Mantém largura total
          zIndex: (theme) => theme.zIndex.drawer + 1, // Garante que fique acima do Drawer
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        <Toolbar>
          <IconButton onClick={() => toggleDrawer(!open)} sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
          <Typography variant="h5">{title}</Typography>
        </Toolbar>
      </AppBar>
      
      <DrawerComponent menuItemLinks={menuItemLinks} open={open}/>
      
      {/* Conteúdo principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: open ? `${drawerWidth}px` : 0,
          transition: (theme) => theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        <Toolbar /> {/* Espaço para a AppBar */}
        <Typography>
          Conteúdo principal da página vai aqui...
        </Typography>
      </Box>
    </Box>
  );
};

export default DashboardPage;