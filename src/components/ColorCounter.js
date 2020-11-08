import React from "react";
import { Button } from "react-native";
import { View, Text, StyleSheet } from "react-native";

const ColorCounter = ({ Color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{Color}</Text>
      <Button onPress={() => onIncrease()} title={"Increase " + Color} />
      <Button onPress={() => onDecrease()} title={"Decrease " + Color} />
    </View>
  );
};
const styles = StyleSheet.create({});
export default ColorCounter;
