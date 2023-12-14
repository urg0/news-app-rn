import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import LottiePlayer from "../components/ui/lottie-player/LottiePlayer";

import Memoji from "../assets/images/test.png";

const LandingScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("All News");
  };

  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.title}>Welcome! 👋</Text>
      </View>
      <Text style={styles.fullName}> I am Ulaş Rotinda Güler. </Text>
      <Image source={Memoji} style={styles.memoji} />
      <Text style={styles.info}>
        Senior Computer Engineering Student at Bahcesehir University, Junior
        Front-end Developer
      </Text>
      <TouchableOpacity style={styles.launchButton} onPress={pressHandler}>
        <Text style={styles.button}>Launch Startupfon Case Study</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  border: {
    borderBottomWidth: 2,
    borderColor: "#4a4ab5",
    marginBottom: 10,
  },
  title: {
    color: "#4a4ab5",
    fontSize: 35,
  },
  fullName: {
    fontSize: 20,
  },
  memoji: {
    width: 250,
    height: 250,
  },
  info: {
    paddingHorizontal: 40,
    marginVertical: 20,
    fontSize: 15,
    textAlign: "center",
  },
  launchButton: {
    backgroundColor: "#4a4ab5",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  button: {
    color: "#fff",
  },
});
