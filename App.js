import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const handlePress = () => console.log("Text pressed");
  //function component
  return (
    //view works as a div
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={3} onPress={handlePress}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, quas ab
        laudantium est, officia soluta laboriosam voluptatum saepe facilis
        beatae non ipsum eaque obcaecati consequatur? Amet repellat perferendis
        officiis esse.
      </Text>
      {/* <Image source={require("./assets/favicon.png")} /> */}
      <Image
        blurRadius={10}
        fadeDuration={1000}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

//Create the stylesheet object, we pass an object that is container, this is not css is js property
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
