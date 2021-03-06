import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image
          style={styles.image1}
          source={require("./bkg.jpg")}
        />
        <View style={styles.bluebox} />
        <Text style={styles.text1}>PRACTICE TRACKER</Text>
        <View style={styles.rect2} />
        <View style={styles.rect3} />
        <View style={styles.rect4} />
        <View style={styles.rect5} />
        <View style={styles.rect6} />
        <Text style={styles.text2}>START PRACTICING</Text>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: { backgroundColor: "white", flex: 1 },
  bluebox: {
    backgroundColor: "rgba(21,155,146,1)",
    height: 731.81,
    width: 349.44,
    top: 44.91,
    left: 11.64,
    position: "absolute",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 38,
    opacity: 0.59
  },
  text1: {
    backgroundColor: "transparent",
    top: 91.19,
    left: 60.97,
    position: "absolute",
    height: 45.26,
    width: 500.07,
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: 28,
    //fontFamily: "system",
    color: "rgba(255,255,255,1)"
  },
  text2: {
    backgroundColor: "transparent",
    top: 705.19,
    left: 90.97,
    position: "absolute",
    height: 45.26,
    width: 251.07,
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: 22,
    //fontFamily: "system",
    color: "rgba(255,255,255,1)"
  },
  rect2: {
    backgroundColor: "rgb(230, 230, 230)",
    height: 431.19,
    width: 48.8,
    top: 214.55,
    left: 51.81,
    position: "absolute"
  },
  rect3: {
    backgroundColor: "rgb(230, 230, 230)",
    height: 472.83,
    width: 53.43,
    top: 172.92,
    left: 124.28,
    position: "absolute"
  },
  rect4: {
    backgroundColor: "rgb(230, 230, 230)",
    height: 366.43,
    width: 51.88,
    top: 280.85,
    left: 196.75,
    position: "absolute"
  },
  rect5: {
    backgroundColor: "rgb(230, 230, 230)",
    height: 421.94,
    width: 50.34,
    top: 225.34,
    left: 266.14,
    position: "absolute"
  },
  rect6: {
    backgroundColor: "rgba(80, 222, 236, 1)",
    height: 58.05,
    width: 244.62,
    top: 691,
    left: 67.23,
    position: "absolute",
    borderRadius: 20,
    opacity: 1
  },
  image1: {
    top: -9.23,
    left: -38.55,
    width: 428.87,
    height: 829.24,
    position: "absolute"
  }
});
