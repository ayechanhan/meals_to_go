import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Card, Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const RestaurantCardAddress = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const OpenNow = styled.View`
  flex-direction: row;
`;

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

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{
          uri: images[0],
        }}
      />
      <Card.Content>
        <RestaurantCardTitle variant="titleLarge">{name}</RestaurantCardTitle>
        <Rating>
          {ratingArray.map((data, idx) => (
            <SvgXml xml={star} width={20} height={20} key={idx} />
          ))}
        </Rating>
        <OpenNow>
          <SvgXml xml={open} width={20} height={20} />
        </OpenNow>
        <RestaurantCardAddress variant="bodyMedium">
          {address}
        </RestaurantCardAddress>
      </Card.Content>
    </RestaurantCard>
  );
};
