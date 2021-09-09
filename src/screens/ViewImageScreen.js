import React from "react";
import { Button, Image, StyleSheet, View } from "react-native";

import { colors } from "../styles/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: colors.redLog,
    height: 50,
    left: 30,
    position: "absolute",
    top: 40,
    width: 50,
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  deleteIcon: {
    backgroundColor: colors.greenReg,
    height: 50,
    right: 30,
    position: "absolute",
    top: 40,
    width: 50,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
export default ViewImageScreen;
