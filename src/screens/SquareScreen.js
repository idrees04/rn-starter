import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setred] = useState(0);
  const [green, setgreen] = useState(0);
  const [blue, setblue] = useState(0);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setred(red + COLOR_INCREMENT)}
        onDecrease={() => setred(red - COLOR_INCREMENT)}
        Color="Red"
      />
      <ColorCounter
        onIncrease={() => setgreen(green + COLOR_INCREMENT)}
        onDecrease={() => setgreen(green - COLOR_INCREMENT)}
        Color="Green"
      />
      <ColorCounter
        onIncrease={() => setblue(blue + COLOR_INCREMENT)}
        onDecrease={() => setblue(blue - COLOR_INCREMENT)}
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
