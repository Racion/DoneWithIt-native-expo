import React from "react";
import { Button, SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  const handlePress = () => console.log("Text pressed");
  //function component
  return (
    //view works as a div
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click me"
        onPress={() => console.log("Button Pressed")}
      />
    </SafeAreaView>
  );
}

//Create the stylesheet object, we pass an object that is container, this is not css is js property
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
