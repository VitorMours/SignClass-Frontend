import React from "react";
import { Box, Paper, CardMedia, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router";
import FormField from "./FormField";

const SigninForm: React.FC = () => {
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
        <CardMedia component="img" image="src/assets/login_form_image.jpg" alt="login_form_image" sx={{ width: "50%", objectFit: "cover" }}>
        </CardMedia>
        <Box sx={{ padding: "12px", border: "1px solid lightgray", display: "flex", width:"50%", flexDirection:"column", justifyContent:"space-evenly", alignItems:"center" }}>
          <Box sx={{ textAlign:"center", marginBottom:2}}>
              <Typography variant="h4" sx={{ margin:1 }}>Sign in</Typography>
              <Typography variant="caption">Aprenda a ouvir oque as pessoas tem a falar, com os olhos...</Typography>
          </Box>

          <Box component="form" method="post" sx={{ display:"flex", flexDirection:"column", alignItems:"center", width:"100%" }}>
              <Box sx={{ display:"flex", justifyContent:"space-between", width:"80%", gap:1}}>
                <FormField sx={{ margin:0, marginBottom:1 }} label={"Nome"} type={"text"} required={true}/>
                <FormField sx={{ margin:0, marginBottom:1 }} label={"Sobrenome"} type={"text"} required={false}/>
              </Box>
              <FormField label={"Email"} type={"email"} required={true}/>
              <FormField label={"Senha"} type={"password"} required={true}/>
              <Link component={RouterLink} to="/login" sx={{ marginX:"10%", display:"flex", alignSelf:"end", fontSize:"80%"}}>Ja possui uma conta? Entao faca login</Link>
              <Button variant="contained" color="primary" type="submit" sx={{ marginTop:5, width:"50%" }}>Sign in</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default SigninForm;
