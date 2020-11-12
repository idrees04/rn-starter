import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 25;

const reducer = (state, action) => {
  // state === { red: number, green: number: blue:number};
  // action === { type: 'change_red' || 'change_green' || 'change_blue' , payload:15}
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
      {
        /*according to  turnry expression(if(state.red + action.payload > 255 || state.red + action.payload < 0) retun true then 
        { ...state, red: state.red + action.payload } this statement will execute ) */
      }

    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      if (
        state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
      ) {
        return state;
      }
      return { ...state, blue: state.blue + action.payload };
      {
        /*i have not converty this cage "Change_blue  into turnry expression*/
      }
    default:
      return state;
  }
};
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        Color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        Color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
        Color="Green"
      />
      <View
        style={{
          height: 200,
          width: 150,
          backgroundColor:
            "rgb(" + state.red + "," + state.green + "," + state.blue + ")",
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default SquareScreen;
