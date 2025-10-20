import React from "react";
import { Drawer, Toolbar, ListItem, ListItemIcon, ListItemButton, List, Box, ListItemText, useTheme } from "@mui/material";

const drawerWidth = 240;

interface DrawerProps {
    menuItemLinks: Array<[React.ReactNode, string]>,
    open: boolean
}

export const DrawerComponent: React.FC<DrawerProps> = ({ menuItemLinks, open }) => {
  const theme = useTheme();
  const appBarHeight = theme.mixins.toolbar.minHeight;  
  return(
        <Drawer
            variant="persistent" // Mudei para persistent para melhor controle
            open={open}
            sx={{
                width: open ? drawerWidth : 0,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    top: appBarHeight, // Posiciona abaixo da AppBar (altura padrão do Toolbar)
                    height: `calc(100vh - ${appBarHeight})`, // Altura total menos a altura da AppBar
                    transition: (theme) => theme.transitions.create('transform', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                    transform: open ? 'translateX(0)' : `translateX(-${drawerWidth}px)`,
                },
            }}
        >
            {/* Remove o Toolbar vazio pois não é mais necessário */}
            <Box sx={{ overflow: "auto" }}>
                <List>
                    {menuItemLinks.map((item) => (
                        <ListItem key={item[1]} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item[0]}</ListItemIcon>
                                <ListItemText primary={item[1]} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}