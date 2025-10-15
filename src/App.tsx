import { ThemeProvider} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import SigninPage from './pages/SigninPage';
import Navbar from './components/NavBar';
import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signin" element={<SigninPage/>} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;