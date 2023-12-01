import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { SvgUri } from "react-native-svg";
import { getIconPath } from "../../../utils/utils.service";

import Memoji from "../../../assets/images/test.png";

const AuthorCard = () => {
  return (
    <View style={styles.container}>
      <Image source={Memoji} style={styles.avatar} />
      <View>
        <Text style={styles.fullname}>Ulaş Rotinda Güler</Text>
        <Text style={styles.job}>Computer Engineer</Text>
      </View>
      <Text style={styles.category}>about Technology</Text>
      <Text style={styles.category}>2 April 2001</Text>
    </View>
  );
};

export default AuthorCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: "50%",
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
