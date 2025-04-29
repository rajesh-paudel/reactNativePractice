import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import coffeeImg from "@/assets/images/coffee.png";
import { Link } from "expo-router";
import React from "react";

export default function index() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={coffeeImg}>
        <Text style={styles.title}>Rajesh Coffee</Text>
        <Text style={styles.description}>
          Discover your favorite coffee, find nearby shops, and enjoy the
          perfect cup—anytime, anywhere.
        </Text>
        <Link style={styles.link} href="/contact" asChild>
          <Pressable>
            <Text style={styles.linkText}>contact</Text>
          </Pressable>
        </Link>
        <Link style={styles.link} href="/menu" asChild>
          <Pressable>
            <Text style={styles.linkText}>menu</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 10,
  },
  description: {
    color: "white",
    fontWeight: "semibold",
    fontSize: 24,
    marginBottom: 10,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  linkText: {
    color: "white",
    height: "100%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    alignContent: "center",
    borderRadius: 20,
  },
  link: {
    color: "white",
    width: 100,
    height: 50,
    marginHorizontal: "auto",
    borderRadius: "",
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.7)",
    borderCurve: "circular",
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
