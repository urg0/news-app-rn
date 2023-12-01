import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const NewsDetailsActions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="👏🏿" />
        <Button title="💬" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="⎕" />
        <Button title="🌀" />
      </View>
    </View>
  );
};

export default NewsDetailsActions;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#000",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: 30,
  },
});
