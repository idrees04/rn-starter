import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>hi there</Text>
      {/* insert new line inbetween Button */}
      <Text> {"\n"}</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      {/* insert new line inbetween Button */}
      <Text> {"\n"}</Text>
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      {/* insert new line inbetween Button */}
      <Text> {"\n"}</Text>
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}
      />
      {/* insert new line inbetween Button */}
      <Text> {"\n"}</Text>
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      {/* insert new line inbetween Button */}
      <Text> {"\n"}</Text>
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate("color")}
      />
      {/* insert new line inbetween Button */}
      <Text> {"\n"}</Text>
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate("Square")}
      />
      {/* insert new line inbetween Button */}
      <Text> {"\n"}</Text>

      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
