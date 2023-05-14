import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = 'Dawit';

    return (
      <View>
        <Text style={style.textStyle}>Geting started with React Native!</Text>
        <Text style={style.subHeadrtStyle}>My name is {name}</Text>
      </View>
    );
};

const style = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeadrtStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;