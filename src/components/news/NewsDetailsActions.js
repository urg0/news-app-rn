import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const NewsDetailsActions = () => {
  const [likes, setLikes] = useState(4);

  const toggleLikeHandler = () => {
    setLikes((prevState) => prevState + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="👏🏿" onPress={toggleLikeHandler} />
        <Text style={styles.likes}>({likes})</Text>
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
  likes: {
    alignSelf: "center",
    fontSize: 12,
  },
});
