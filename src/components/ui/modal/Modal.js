import React from "react";
import { Alert, StyleSheet, Modal, View, Button } from "react-native";

const CustomModal = ({ children, isOpen, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        onClose;
      }}
    >
      <View style={styles.centeredView}>
        {children}
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d8deec",
    paddingBottom: 30,
  },
});
