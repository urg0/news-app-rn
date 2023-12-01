import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import test from "../assets/images/news.jpeg";
import NewsDetailsActions from "../components/news/NewsDetailsActions";
import AuthorCard from "../components/ui/cards/AuthorCard";

const NewsDetails = () => {
  return (
    <View style={styles.container}>
      <Image source={test} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid.
        </Text>
        <Text style={styles.article}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          recusandae mollitia molestias quod eaque officia. Aliquam natus et
          fugit quisquam?
        </Text>
      </View>
      <View style={styles.authorContainer}>
        <AuthorCard />
      </View>
      <NewsDetailsActions />
      <Text style={styles.newsInfo}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem doloribus
        odit a vero, laboriosam repudiandae voluptates recusandae! Soluta quo
        odio ducimus impedit excepturi. Ab, sapiente. Corrupti aliquam beatae
        molestiae distinctio illum totam aperiam earum voluptatibus perspiciatis
        id nisi ab quaerat sequi vero quia explicabo ratione alias, nihil, nam
        autem ad dicta provident nulla? Quidem, quo corrupti? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam officia at, quo
        cupiditate assumenda, ex, asperiores hic rem repellat reprehenderit
        eligendi molestias aliquid corporis repudiandae maxime ratione nesciunt.
        Ex.
      </Text>
    </View>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 200,
    borderRadius: 8,
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  article: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 10,
  },
  authorContainer: {
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  newsInfo: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
