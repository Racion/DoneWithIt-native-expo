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
        alignItems: "stretch",
      }}
    >
      <View
        style={{ backgroundColor: "dodgerblue", height: 300, width: 100 }}
      ></View>
      <View style={{ backgroundColor: "gold", height: 200, width: 100 }}></View>
      <View
        style={{ backgroundColor: "tomato", height: 100, width: 100 }}
      ></View>
    </View>
  );
}
