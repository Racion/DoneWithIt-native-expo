import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center", 
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{ backgroundColor: "dodgerblue", height: 100, width: 100 }}
      ></View>
      <View style={{ backgroundColor: "gold", height: 100, width: 100 }}></View>
      <View
        style={{ backgroundColor: "tomato", height: 100, width: 100 }}
      ></View>
      <View style={{ backgroundColor: "grey", height: 100, width: 100 }}></View>
      <View
        style={{ backgroundColor: "greenyellow", height: 100, width: 100 }}
      ></View>
    </View>
  );
}
