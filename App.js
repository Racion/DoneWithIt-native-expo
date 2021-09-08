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
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          height: 100,
          width: 100,
          //flexgrow: 1,
          //flex: 1,
          //flexbasis: 100, replace width on row and height on col
          //flexshrink: 1,
          //flex: -1,
        }}
      ></View>
      <View style={{ backgroundColor: "gold", height: 100, width: 100 }}></View>
      <View
        style={{ backgroundColor: "tomato", height: 100, width: 100 }}
      ></View>
    </View>
  );
}
