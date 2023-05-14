import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../compenents/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forst"
              imageSource={require("../../assets/forest.jpg")}
              score={9}
      />
      <ImageDetail
        title="Beach"
              imageSource={require("../../assets/beach.jpg")}
              score={6}
      />
      <ImageDetail
        title="Mountain"
              imageSource={require("../../assets/mountain.jpg")}
              score={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
