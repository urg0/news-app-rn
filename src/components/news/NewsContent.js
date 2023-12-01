import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import test from "../../assets/images/news.jpeg";

const NewsContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid.
        </Text>
        <Text style={styles.article}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          recusandae in autem molestiae porro harum molestias saepe similique
          quas odio!
        </Text>
      </View>
      <Image source={test} style={styles.image} />
    </View>
  );
};

export default NewsContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  textContainer: {
    flex: 2,
    paddingTop: 0,
  },
  title: {
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 8,
  },
  article: {
    fontSize: 10,
    fontWeight: 600,
  },
  image: {
    flex: 1,
    width: 80,
    height: 80,
    borderRadius: 4,
    marginLeft: 10,
  },
});
