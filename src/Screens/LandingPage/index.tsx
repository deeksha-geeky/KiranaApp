import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";
import GifList from "./GifList";
import ThemeToggler from "./ThemeToggler";
import ThemeContext from "../../utils/ThemeContext";

const LandingPage = () => {
  const [gifs, setGIFS] = useState([]);
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[
        styles.container,
        theme === "dark"
          ? { backgroundColor: "black" }
          : { backgroundColor: "white" },
      ]}
    >
      <View style={styles.row}>
        <SearchBar setGIFS={setGIFS} />
        <ThemeToggler />
      </View>
      <GifList gifs={gifs} setGIFS={setGIFS} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: { justifyContent: "space-between", flexDirection: "row" },
  container: {
    flex: 1,
    marginTop: 50,
    padding: 10,
  },
});

export default LandingPage;
