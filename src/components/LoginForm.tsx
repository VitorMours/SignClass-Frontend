import React from "react";
import { Box, Paper, TextField, Card, CardMedia, CardContent, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router";
import FormField from "./FormField";

const LoginForm: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh",
        padding: 2,
      }}
    >
      <Paper elevation={2} sx={{ display:"flex", height: "65%", width: "65%"}}>
        <CardMedia component="img" image="src/assets/signin_form_image.webp" alt="signin_form_image" sx={{ width: "50%", objectFit: "cover" }}>
        </CardMedia>
        <Box sx={{ padding: "12px", border: "1px solid lightgray", display: "flex", width:"50%", flexDirection:"column", justifyContent:"space-evenly", alignItems:"center" }}>
          <Box sx={{ textAlign:"center", marginBottom:2, height:"10%" }}>
              <Typography variant="h4" sx={{ margin:1 }}>Login</Typography>
              <Typography variant="caption">Vendo oque as pessoas tem a dizer</Typography>
          </Box>

          <Box component="form" method="post" sx={{ display:"flex", flexDirection:"column", alignItems:"center", width:"100%", height:"50%"  }}>
              <FormField label={"Email"} type={"email"} required={true}/>
              <FormField label={"Password"} type={"password"} required={true}/>
              <Link component={RouterLink} to="/signin" sx={{ marginX:"10%", display:"flex", alignSelf:"end", fontSize:"80%"}}>nao possui cadastro? Faca a sua conta.</Link>
              <Button variant="contained" color="primary" type="submit" sx={{ marginTop:5, width:"50%" }}>Sign in</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginForm;
