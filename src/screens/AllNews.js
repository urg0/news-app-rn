import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useQuery } from "@tanstack/react-query";
import { eventsUrl, fetchData } from "../utils/api.service";

import NewsItem from "../components/news/NewsItem";

const AllNews = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState("");

  const {
    data: allNews,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["news"],
    queryFn: () => fetchData(eventsUrl),
  });

  const searchInputChangeHandler = (inputValue) => {
    setSearchInput(inputValue);
  };

  const navigateHandler = (id) => {
    navigation.navigate("News Details", { newsId: id });
  };

  const filteredNews = allNews?.filter((newsItem) => {
    return newsItem.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          value={searchInput}
          placeholder="Search within the latest news..."
          onChangeText={searchInputChangeHandler}
        />
        {filteredNews && (
          <FlatList
            data={filteredNews}
            renderItem={({ item }) => (
              <NewsItem
                onNavigate={() => navigateHandler(item.id)}
                newsItem={item}
              />
            )}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        )}
        {filteredNews?.length === 0 && <Text>No news found.</Text>}
        {isPending && <ActivityIndicator size="large" />}
      </View>
    </SafeAreaView>
  );
};

export default AllNews;

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 64,
    marginVertical: 32,
    borderWidth: 1,
    borderColor: "#919191",
    borderRadius: 8,
    padding: 10,
    color: "#000",
  },
});
