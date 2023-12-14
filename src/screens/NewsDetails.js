import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useQuery } from "@tanstack/react-query";
import { eventsUrl, fetchData } from "../utils/api.service";

import NewsDetailsActions from "../components/news/NewsDetailsActions";
import AuthorCard from "../components/ui/cards/AuthorCard";
import Error from "../components/ui/error/Error";
import CustomModal from "../components/ui/modal/Modal";
import AuthorModal from "../components/author/AuthorModal";

const NewsDetails = ({ route }) => {
  const id = route.params.newsId;

  const [modalVisible, setModalVisible] = useState(false);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["news", id],
    queryFn: () => fetchData(`${eventsUrl}/${id}`),
    staleTime: 0,
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        {data && (
          <>
            <Image source={{ uri: data.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.article}>{data.text}</Text>
            </View>
            <View style={styles.authorContainer}>
              <Pressable onPress={() => setModalVisible(true)}>
                <AuthorCard
                  avatar={data.avatar}
                  fullName={data.fullName}
                  job={data.job}
                  date={data.date}
                />
              </Pressable>
            </View>
            <NewsDetailsActions />
            <Text style={styles.newsInfo}>
              {data.text}
              {data.text}
              {data.text}
              {data.text}
              {data.text}
              {data.text}
            </Text>
          </>
        )}
        {isPending && <ActivityIndicator size="large" />}
        {isError && <Error />}
      </View>
      <CustomModal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        {data && (
          <AuthorModal
            avatar={data.avatar}
            fullName={data.fullName}
            job={data.job}
            date={data.date}
          />
        )}
      </CustomModal>
    </ScrollView>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
  image: {
    width: 400,
    height: 200,
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
