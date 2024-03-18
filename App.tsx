/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import LandingPage from "./src/Screens/LandingPage";
import ThemeContext from "./src/utils/ThemeContext";

function App(): React.JSX.Element {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LandingPage />
    </ThemeContext.Provider>
  );
}

export default App;
