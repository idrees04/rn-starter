import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

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
      <FlatList
        keyExtractor={(item) => item}
        data={Colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
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
