import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 100,
    // alignItems: 'center',
    flexDirection: "row",
    justifyContent: "space-between",
  },
    viewOneStyle: {
      height: 50,
      width: 50,
      backgroundColor: 'red'
    // borderWidth: 3,
    // borderColor: "red",
    // flex: 4,
    // margin: 15
  },
    viewTwoStyle: {
      height: 50,
      width: 50,
      backgroundColor: 'green',
    // borderWidth: 3,
    //   borderColor: "red",
    // right: 10
    alignSelf: "flex-end",

    // flex: 4
    // margin: 15
  },
    viewThreeStyle: {
      height: 50,
      width: 50,
      backgroundColor: 'purple'
    // borderWidth: 3,
    // borderColor: "red",
    // flex: 2
    // margin: 15
  },
});

export default BoxScreen