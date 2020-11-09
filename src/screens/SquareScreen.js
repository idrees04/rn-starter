import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 25;

const SquareScreen = () => {
  const [red, setred] = useState(0);
  const [green, setgreen] = useState(0);
  const [blue, setblue] = useState(0);

  const setColor = (Color, change) => {
    switch (Color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setred(red + change);
        return;
      case "green": {
        green + change > 255 || green + change < 0
          ? null
          : setgreen(green + change);
        return;
      }
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setblue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        Color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        Color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        Color="Blue"
      />
      <View
        style={{
          height: 200,
          width: 150,
          backgroundColor: "rgb(" + red + "," + green + "," + blue + ")",
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default SquareScreen;
