import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //Don't Do this
          // counter++;
          setCounter(counter + 1);
        }}
      />
      {/* insert new line inbetween Button */}
      <Text> {"\n"}</Text>
      <Button
        title="Decrease"
        onPress={() => {
          //Don't Do this
          //counter--;
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
