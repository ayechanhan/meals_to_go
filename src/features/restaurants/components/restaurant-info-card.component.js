import React from "react";
import { Text } from "../../../components/typography/text.component";
import { SvgXml } from "react-native-svg";
import {
  RestaurantCard,
  RestaurantCardCover,
  Rating,
  Section,
  OpenNow,
  RestaurantContent,
  Icon,
} from "./restaurant-info-card.styles";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

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
      <RestaurantContent>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((data, idx) => (
              <SvgXml xml={star} width={20} height={20} key={idx} />
            ))}
            <OpenNow>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </OpenNow>
          </Rating>
        </Section>
        <Text variant="body">{address}</Text>
      </RestaurantContent>
    </RestaurantCard>
  );
};
