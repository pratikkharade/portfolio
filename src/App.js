import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  const theme = isDark ? chosenTheme : lightTheme;

  useEffect(() => {
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Main
            theme={theme}
            isDark={isDark}
            toggleTheme={() => setIsDark((currentTheme) => !currentTheme)}
          />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
