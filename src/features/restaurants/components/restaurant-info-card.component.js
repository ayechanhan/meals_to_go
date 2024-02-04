import React from "react";
import { View, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";
import { Card, Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

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

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const OpenNow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RestaurntInfo = ({ restaurant = {} }) => {
  const {
    name = "Song Fa Buk Kut Teh",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    images = [
      "https://songfa.com.sg/cdn/shop/files/SFBKT_BibGoumand23_WebBanner_PC_365968b7-046e-4063-bd27-65888c334717_1439x400@2x.jpg?v=1686810779",
    ],
    address = "238 Thomson Road Singapore 307683",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
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
        <Section>
          <Rating>
            {ratingArray.map((data, idx) => (
              <SvgXml xml={star} width={20} height={20} key={idx} />
            ))}
            <OpenNow>
              {isClosedTemporarily && (
                <Text variant="labelLarge" style={{ color: "red" }}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Image
                  style={{ width: 15, height: 15 }}
                  source={{ uri: icon }}
                />
              </Spacer>
            </OpenNow>
          </Rating>
        </Section>
        <RestaurantCardAddress variant="bodyMedium">
          {address}
        </RestaurantCardAddress>
      </Card.Content>
    </RestaurantCard>
  );
};
