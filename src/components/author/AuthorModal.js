import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const AuthorModal = ({ avatar, fullName, job }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View>
        <Text style={styles.fullname}> {fullName} </Text>
        <Text style={styles.job}>{job}</Text>
      </View>
      <Text style={styles.category}>about Technology</Text>
      <Text style={styles.info}>Birthdate: 2 April 2001</Text>
      <Text style={styles.info}>Birth Place: New York</Text>
      <Text style={styles.info}>Email: urguler@gmail.com</Text>
    </View>
  );
};

export default AuthorModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  avatar: {
    width: 220,
    height: 220,
    borderRadius: "10%",
    marginRight: 6,
  },
  fullname: {
    marginTop: 30,
    marginBottom: 10,

    textAlign: "center",
    fontSize: 32,
  },
  job: {
    fontSize: 22,
    textAlign: "center",
  },
  category: {
    fontSize: 18.5,
    marginLeft: 16,
    marginBottom: 20,
  },
  info: {
    fontSize: 18.5,
    marginLeft: 16,
    color: "#919191",
  },
});
