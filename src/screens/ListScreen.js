import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "20" },
    { name: "Friend #2", age: "45" },
    { name: "Friend #3", age: "54" },
    { name: "Friend #4", age: "33" },
    { name: "Friend #5", age: "27" },
    { name: "Friend #6", age: "18" },
  ];

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 15,
  },
});

export default ListScreen;
