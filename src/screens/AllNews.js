import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import NewsItem from "../components/news/NewsItem";

const AllNews = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState("");

  const searchInputChangeHandler = (inputValue) => {
    setSearchInput(inputValue);
  };

  const navigateHandler = () => {
    navigation.navigate("News Details");
  };

  const test = [1, 2, 3, 4, 5];

  return (
    <SafeAreaView>
      <Pressable onPress={navigateHandler}>
        <View>
          <TextInput
            style={styles.input}
            value={searchInput}
            placeholder="Search within the latest news..."
            onChangeText={searchInputChangeHandler}
          />
          <FlatList data={test} renderItem={() => <NewsItem />} />
        </View>
      </Pressable>
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
