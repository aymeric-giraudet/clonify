import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  suggestions: {
    marginTop: 18,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 36,
  },
  suggestion: {
    backgroundColor: "#333",
    flexGrow: 0,
    flexShrink: 1,
    width: "49%",
    marginBottom: 6,
    display: "flex",
    flexDirection: "row",
    borderRadius: 4,
    maxHeight: 56,
  },
  suggestionText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
    marginHorizontal: 8,
    flexShrink: 1,
  },
  image: {
    width: 56,
    height: 56,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
});

const data = [
  { title: "Etrian Odyssey III: The Drowned City" },
  { title: "Etrian Odyssey III: The Drowned City" },
  { title: "Etrian Odyssey III: The Drowned City" },
  { title: "Etrian Odyssey III: The Drowned City" },
  { title: "Etrian Odyssey III: The Drowned City" },
  { title: "Etrian Odyssey III: The Drowned City" },
];

export default function Suggestions() {
  return (
    <>
      <Text style={styles.title}>Good afternoon</Text>
      <View style={styles.suggestions}>
        {data.map(({ title }, idx) => (
          <View style={styles.suggestion} key={idx}>
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://m.media-amazon.com/images/I/81OuvTqMT9L._SS500_.jpg",
              }}
            />
            <Text style={styles.suggestionText}>{title}</Text>
          </View>
        ))}
      </View>
    </>
  );
}
