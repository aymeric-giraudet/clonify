import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Suggestions from "../components/Suggestions";
import PlayedRecently from "../components/PlayedRecently";

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <Ionicons size={30} name="md-settings" style={styles.cog} />
      <ScrollView contentContainerStyle={styles.container}>
        <Suggestions />
        <PlayedRecently />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  cog: {
    alignSelf: "flex-end",
    paddingRight: 12,
    paddingTop: 16,
    color: "white",
  },
});
