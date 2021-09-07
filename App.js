import React from "react";
import {
  Alert,
  Button,
  Dimensions,
  Platform,
  SafeAreaView /* only works on iOS */,
  StatusBar,
  StyleSheet,
  View
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text pressed");
  //function component
  return (
    //view works as a div
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click me"
        onPress={
          () => {
            return Alert.prompt("My title", "Message", (text) =>
              console.log(text)
            ); //! prompt only works on iOS
          }
          // Alert.alert("Hello", "This is an alert.", [
          //   { text: "Yes", onPress: () => console.log("Yes") },
          //   { text: "No", onPress: () => console.log("No") },
          // ])
        }
      />
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
