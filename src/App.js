import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
// import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        {/* <Router basename="/portfolio"> */}
          <div>
            <Main theme={chosenTheme} />
          </div>
        {/* </Router> */}
      </>
    </ThemeProvider>
  );
}

export default App;
