import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";

const ColorScreen = () => {
  const [Colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add Color "
        onPress={() => {
          setColors([...Colors, randomRgb()]);
        }}
      />
      <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
      <View
        style={{ height: 100, width: 100, backgroundColor: "rgb(0,226,0)" }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  // return "rgb(${red}, ${green}, ${blue})";
  return "rgb(" + red + "," + green + "," + blue + ")";
};

const styles = StyleSheet.create({});

export default ColorScreen;
