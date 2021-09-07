import React from "react";
import {
  Alert,
  Button,
  Dimensions,
  Platform,
  SafeAreaView /* only works on iOS */,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));
  const handlePress = () => console.log("Text pressed");
  //function component
  return (
    //view works as a div
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: "50%", height: 70 }}
      ></View>
    </SafeAreaView>
  );
}

//Create the stylesheet object, we pass an object that is container, this is not css is js property
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
