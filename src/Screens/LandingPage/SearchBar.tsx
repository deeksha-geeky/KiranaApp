import React, { useContext, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { SEARCH_GIF } from "../../API/APIConstants";
import { fetchHelper } from "../../utils/APIHelper";
import ThemeContext from "../../utils/ThemeContext";

const SearchBar = ({ setGIFS }) => {
  const [searchValue, setSearchValue] = useState("");
  const { theme } = useContext(ThemeContext);

  const filterGif = async () => {
    const gifs = await fetchHelper(`${SEARCH_GIF}${searchValue}`);
    setGIFS(gifs);
  };

  const handleTextInput = (searchStr: string) => {
    setSearchValue(searchStr);
    setTimeout(() => {
      filterGif();
    }, 100);
  };

  return (
    <TextInput
      value={searchValue}
      onChangeText={(value: string) => handleTextInput(value)}
      style={[
        styles.textInput,
        theme === "light"
          ? { borderColor: "black", color: "black" }
          : { borderColor: "white", color: "white" },
      ]}
      placeholder="Search Giphy..."
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
});

export default SearchBar;
