import { View, Text, StyleSheet, Appearance } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
export default function contact() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const imgColor = colorScheme === "dark" ? "papayawhip" : "#333";
  const styles = createStyles(theme, colorScheme);
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Fontisto name="coffeescript" size={250} color={imgColor}></Fontisto>
      </View>
      <Text style={styles.title}>Coffee Shop</Text>

      <View style={styles.textBox}>
        <Text style={styles.text}>444 Coffee Lane</Text>
        <Text style={styles.text}>Kathmandu 5555-3423</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.text}>Phone:</Text>
        <Link style={styles.link} href="tel:666666666">
          666-666-666
        </Link>
        <Text style={styles.text}>
          or{" "}
          <Link style={styles.link} href="sms:666666666">
            Click here to text!
          </Link>
        </Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.text}>Hours:</Text>
        <Text style={styles.text}>Open 6am to 4pm daily.</Text>
      </View>
    </View>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      flexDirection: "column",
      backgroundColor: theme.background,
    },
    imgContainer: {
      backgroundColor: colorScheme === "dark" ? "#353636" : "#D0D0D0",
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      color: theme.text,
      fontWeight: "bold",
      marginBottom: 10,
    },
    text: {
      color: theme.text,
      fontSize: 20,
      fontWeight: "semibold",
    },
    link: {
      color: theme.text,
      fontSize: 20,
      fontWeight: "semibold",
      textDecorationLine: "underline",
    },
    textBox: {
      marginBottom: 20,
    },
  });
}
