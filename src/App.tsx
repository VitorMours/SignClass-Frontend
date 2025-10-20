import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import DashboardPage from "./pages/DashboardPage";
import Navbar from "./components/NavBar";
import theme from "./utils/theme";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signin" element={<SigninPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
