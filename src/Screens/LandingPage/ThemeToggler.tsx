import React, { useContext, useState } from "react";
import { StyleSheet, Switch, View } from "react-native";
import ThemeContext from "../../utils/ThemeContext";

const ThemeToggler = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { setTheme } = useContext(ThemeContext);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setTheme(isEnabled ? "dark" : "light");
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={"#3e3e3e"}
        thumbColor={"#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});
export default ThemeToggler;
