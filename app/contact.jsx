import { View, Text, StyleSheet } from "react-native";

import React from "react";

export default function contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>contact</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 10,
  },
});
