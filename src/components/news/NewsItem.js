import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthorCard from "../ui/cards/AuthorCard";
import NewsContent from "./NewsContent";

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <AuthorCard />
      <NewsContent />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#91919",
    marginHorizontal: 30,
  },
});
