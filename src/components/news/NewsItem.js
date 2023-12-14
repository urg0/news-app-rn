import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AuthorCard from "../ui/cards/AuthorCard";
import NewsContent from "./NewsContent";

const NewsItem = ({ newsItem, onNavigate }) => {
  const { id, title, date, text, image, fullName, job, avatar, isBookmarked } =
    newsItem;

  return (
    <View style={styles.container}>
      <AuthorCard avatar={avatar} fullName={fullName} job={job} />
      <Pressable onPress={onNavigate}>
        <NewsContent
          id={id}
          title={title}
          text={text}
          image={image}
          date={date}
        />
      </Pressable>
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
