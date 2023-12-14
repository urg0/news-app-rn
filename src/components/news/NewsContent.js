import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { dateFormatter } from "../../utils/utils.service";

const NewsContent = ({ id, title, text, image, date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <Text style={styles.article}>•5 min read</Text>
          <Text style={styles.article}>•{dateFormatter(date)}</Text>
        </View>
      </View>
      <Image source={{ uri: image }} style={styles.image} />
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
  row: {
    flexDirection: "row",
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
    marginRight: 15,
    color: "#616161",
  },
  image: {
    flex: 1,
    width: 60,
    height: 60,
    borderRadius: 4,
    marginLeft: 10,
  },
});
