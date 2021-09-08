import React from "react";
import {
  Button,
  View,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";

import { colors } from "../styles/styles";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="    " color={colors.redLog} />
        <Button title="    " color={colors.greenReg} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/chair.jpg")}
          resizeMode="center"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  buttonContainer: {
    paddingLeft: 50,
    paddingRight: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
