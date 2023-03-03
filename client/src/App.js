import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Home from './pages/home';
import Details from './pages/details';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#85B934"
    },
    secondary: {
        dark: "#424242",
        main: "#9e9e9e",
        light: "#e0e0e0"
    }
  },
  typography: {
    fontSize: 12,
    button: {
        textTransform: 'none'
    }
  },
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    }
  }
});
 
const App = () => {
 return (
   <ThemeProvider theme={theme}>
     <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/details/:id" element={<Details />} />
     </Routes>
   </ThemeProvider>
 );
};
 
export default App;