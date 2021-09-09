import React from "react";
import {
  Button,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
} from "react-native";

import { colors } from "../styles/styles";

export default function WelcomeScreen() {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/logo-red.png")}
            style={styles.imagestyle}
          />
          <Text> Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttons}>
          <Button title="red" color={colors.redLog} />
          <Button title="green" color={colors.greenReg} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  buttons: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
  imagestyle: {
    width: 100,
    height: 100,
  },
});


