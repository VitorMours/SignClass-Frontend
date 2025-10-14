import React from "react";
import { Paper, Box, useTheme } from "@mui/material";


const LoginPage: React.FC = () => {
    const theme = useTheme();
    return(
        <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            height: '100dvh',
            padding: 2}}>
            <Paper elevation={2} sx={{ padding:'12px' }}>adasdawdadas</Paper>



        </Box>  // TODO: Crair o formulário de login
    );
}

export default LoginPage;