import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export const RestaurntInfo = ({ restaurant = {} }) => {
  const {
    name = "Song Fa Buk Kut Teh",
    icon,
    images = [
      "https://songfa.com.sg/cdn/shop/files/SFBKT_BibGoumand23_WebBanner_PC_365968b7-046e-4063-bd27-65888c334717_1439x400@2x.jpg?v=1686810779",
    ],
    address = "238 Thomson Road Singapore 307683",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        style={styles.cover}
        source={{
          uri: images[0],
        }}
      />
      <Card.Content>
        <Text variant="titleLarge">{name}</Text>
        <Text variant="bodyMedium">{address}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    backgroundColor: "white",
  },
});
