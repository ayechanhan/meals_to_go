import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurntInfo } from "../components/restaurant-info-card.component";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled.View`
  padding: 16px;
`;

const ListView = styled.View`
  flex: 1;
  padding: 16px;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>
      <ListView>
        <RestaurntInfo />
      </ListView>
    </SafeArea>
  );
};
