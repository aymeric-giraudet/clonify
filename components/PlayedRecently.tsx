import * as React from "react";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  recentlyPlayed: {
    display: "flex",
    flexDirection: "row",
    marginTop: 18,
    paddingLeft: 16,
  },
  playedTitle: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    marginRight: 16,
  },
  imageTitle: {
    width: 126,
    height: 126,
  },
  textTitle: {
    marginTop: 8,
    color: "white",
    flexShrink: 1,
    maxWidth: 126,
    fontWeight: "bold",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
});

const data = [
  { title: "The Legend of Heroes: Sen no Kiseki Soundtrack Volume 1" },
  { title: "The Legend of Heroes: Sen no Kiseki Soundtrack Volume 1" },
  { title: "The Legend of Heroes: Sen no Kiseki Soundtrack Volume 1" },
  { title: "The Legend of Heroes: Sen no Kiseki Soundtrack Volume 1" },
  { title: "The Legend of Heroes: Sen no Kiseki Soundtrack Volume 1" },
  { title: "The Legend of Heroes: Sen no Kiseki Soundtrack Volume 1" },
  { title: "The Legend of Heroes: Sen no Kiseki Soundtrack Volume 1" },
  { title: "The Legend of Heroes: Sen no Kiseki Soundtrack Volume 1" },
  { title: "The Legend of Heroes: Sen no Kiseki Soundtrack Volume 1" },
  { title: "The Legend of Heroes: Sen no Kiseki Soundtrack Volume 1" },
  { title: "The Legend of Heroes: Sen no Kiseki Soundtrack Volume 1" },
];

export default function PlayedRecently() {
  return (
    <>
      <Text style={styles.title}>Recently played</Text>
      <ScrollView
        style={{ marginHorizontal: -16 }}
        contentContainerStyle={styles.recentlyPlayed}
        horizontal
        overScrollMode="never"
      >
        {data.map(({ title }, idx) => (
          <View style={styles.playedTitle} key={idx}>
            <Image
              style={styles.imageTitle}
              source={{
                uri:
                  "https://m.media-amazon.com/images/I/81OuvTqMT9L._SS500_.jpg",
              }}
            />
            <Text style={styles.textTitle} numberOfLines={2}>
              {title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
