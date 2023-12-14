import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { SvgUri } from "react-native-svg";
import { getIconPath } from "../../../utils/utils.service";

const AuthorCard = ({ avatar, fullName, job }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View>
        <Text style={styles.fullname}> {fullName} </Text>
        <Text style={styles.job}>{job}</Text>
      </View>
      <Text style={styles.category}>about Technology</Text>
    </View>
  );
};

export default AuthorCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 8,
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    marginRight: 6,
  },
  fullname: {
    fontSize: 12,
  },
  job: {
    fontSize: 9,
    textAlign: "center",
  },
  category: {
    fontSize: 8.5,
    marginLeft: 16,
  },
});
