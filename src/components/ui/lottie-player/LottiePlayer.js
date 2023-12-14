import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

const LottiePlayer = ({ animationData }) => {
  return (
    <View>
      <LottieView
        source={require("../../../assets/animations/loading2.json")}
        autoPlay
        loop
      />
    </View>
  );
};

export default LottiePlayer;
