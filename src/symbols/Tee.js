import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionic";
import { View, StyleSheet } from "react-native";
export default class Tee extends Component {
  static containerStyle = { width: 30.02, height: 38.55 };
  render() {
    return (
      <View style={[Tee.containerStyle, this.props.style]}>
        <Icon style={styles.icon1} name="ios-home" size={40} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon1: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "transparent",
    color: "grey"
  }
});
