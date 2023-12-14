import React from "react";
import { Image, StyleSheet, View } from "react-native";

import ErrorImage from "../../../assets/images/error.jpeg";

const Error = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={ErrorImage} />
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  image: {
    width: 400,
    height: 420,
    borderRadius: 16,
  },
});
