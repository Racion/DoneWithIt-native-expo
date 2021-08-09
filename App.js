import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  let x = 1;
  console.log("App Executed");

  //function component
  return (
    //view works as a div
    <View style={styles.container}>
      <Text>Hello React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//Create the stylesheet object, we pass an object that is container, this is not css is js property
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
