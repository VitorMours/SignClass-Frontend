// DashboardPage.tsx
import React, { useState } from "react";
import { Box, CssBaseline, Typography, Stack } from "@mui/material";
import { Home, Person, Search } from "@mui/icons-material";
import { LayoutComponent } from "../layout/DashboardLayout";
import SignCard from "../components/SignCard";
import useUser from "../hooks/useUser";

interface DashboardBarProps {
  title?: string;
}

export const DashboardPage: React.FC<DashboardBarProps> = ({
  title = "SignClass",
}) => {

  const { user } = useUser();
  const [open, setOpen] = useState(false);

  function toggleDrawer(newOpen: boolean) {
    setOpen(newOpen);
  }

  const menuItemLinks: Array<[React.ReactNode, string]> = [
    [<Home />, "Home"],
    [<Person />, "Person"],
    [<Search />, "Search"],
  ];

  // Função para renderizar os cards
  const renderSignCards = () => {
    const cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push(
        <SignCard
          key={i}
          name={`Reptile ${i + 1}`}
          meaning="The reptile is a incredible animal"
          hand_configuration="gesto italiano"
          articulation_point="head"
          movement="circular"
          body_expression="expressivamente"
          direction_and_orientation="em direcao aa testa"
        />
      );
    }
    return cards;
  };

  return (

    <>
      <CssBaseline />
      <LayoutComponent
        title={title}
        open={open}
        onToggleDrawer={toggleDrawer}
        menuItemLinks={menuItemLinks}
      >
        <Stack>
          <Typography variant="h4" sx={{ mb:2 }}>Bem vindo { user?.first_name }</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {renderSignCards()}
          </Box>
        </Stack>
      
      </LayoutComponent>
    </>
  );
};

export default DashboardPage;
