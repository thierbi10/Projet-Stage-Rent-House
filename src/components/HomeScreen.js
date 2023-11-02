
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import COLORS from "../../src/const/color";
import places from "../../src/const/houses";
import Icon from "react-native-vector-icons/MaterialIcons";
import houseData from "../../src/const/houseData";
import { Link } from "expo-router";


const { width } = Dimensions.get("window");

const categoryList = ["House", "Apartment", "Hotel", "Villa"];
// Composant pour afficher la liste des catégoriesssss
const ListCategories = ({ selectedCategoryIndex, setSelectedCategoryIndex }) => {
  return (
    <View style={styles.categoryListContainer}>
      {categoryList.map((category, index) => (
        <Pressable key={index} onPress={() => setSelectedCategoryIndex(index)}>
          <Text
            style={[
              styles.categoryListText,
              index === selectedCategoryIndex && styles.activeCategoryListText,
              index === 0 && styles.firstCategoryStyle,
            ]}
          >
            {category}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const Card = ({ place }) => {
  return (
    <ImageBackground style={styles.cardImage} source={place.image}>
      <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }}>
        <Text
          style={{
            paddingVertical: 1,
            paddingHorizontal: 10,
            backgroundColor: COLORS.grey,
            fontSize: 11,
            color: COLORS.white,
            borderRadius: 20,
          }}
        >
          <Icon name="location-pin" size={10} style={{ marginTop: 15 }} color={COLORS.white} />
          <Text>15 km</Text>
        </Text>
      </View>
      <Text style={{ color: COLORS.white, fontSize: 16, marginTop: 140, fontWeight: "bold" }}>
        {place.name}
      </Text>
      <Text style={{ color: COLORS.white, fontSize: 12, fontWeight: "normal" }}>
        {place.location}
      </Text>
    </ImageBackground>
  );
};

// Composant principal de l'écran d'accueil
const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [showAllCards, setShowAllCards] = useState(false);
// Filtrer les données de maison en fonction de la recherche et de la catégorie sélectionnée
  const filteredHouses = houseData.filter((house) => {
    return (
      ((house.location && house.location.toLowerCase().includes(searchValue.toLowerCase())) ||
      (house.name && house.name.toLowerCase().includes(searchValue.toLowerCase()))) &&
      (selectedCategoryIndex === 0 || house.category === categoryList[selectedCategoryIndex])
    );
  });

// Afficher toutes les cartes ou seulement les 4 premières
  const visibleHouses = showAllCards ? filteredHouses : filteredHouses.slice(0, 4);
  
    // Composant pour afficher une carte de maison
  const CardHouse = ({ house }) => {
    return (
      <Link href={{ pathname: '/DetailScreen', params: { house } }}>
        <View style={styles.CardHouseCont}>
          <Image source={house.image} style={styles.cardImages} />
          <View>
            <Text style={{ color: COLORS.dark, fontWeight: "bold", fontSize: 16, marginTop: 5 }}>
              {house.location}
            </Text>
            <Text style={{ color: COLORS.blue, fontSize: 14, marginTop: 5 }}>
              {house.ref}
            </Text>
            <View style={{ marginTop: 10, flexDirection: "row" }}>
              <View style={styles.facility}>
                <Icon name="hotel" color={COLORS.backgroundtrans} size={18} />
                <Text style={styles.facilityText}>{house.bedrooms} chambres</Text>
              </View>
              <View style={styles.facility}>
                <Icon name="bathtub" color={COLORS.backgroundtrans} size={18} />
                <Text style={styles.facilityText}>{house.bathrooms} salles de bain</Text>
              </View>
            </View>
          </View>
        </View>
      </Link>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <View>
          <Text style={{ color: COLORS.grey }}>localisation</Text>
          <Text style={{ color: COLORS.dark, fontSize: 20, fontWeight: "bold" }}>
            Dakar
          </Text>
        </View>
        <Icon name="notifications-none" color={COLORS.grey} size={25} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View style={styles.searchInputContainer}>
            <Icon name="search" color={COLORS.grey} size={25} />
            <TextInput
              placeholder="Rechercher une adresse  "
              value={searchValue}
              onChangeText={(text) => setSearchValue(text)}
            />
          </View>
          <View style={styles.sortBtn}>
            <Icon name="tune" color={COLORS.white} size={25} />
          </View>
        </View>
        <ListCategories
          selectedCategoryIndex={selectedCategoryIndex}
          setSelectedCategoryIndex={setSelectedCategoryIndex}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
            marginTop: 20,
          }}
        >
          <View>
            <Text style={{ color: COLORS.dark, fontSize: 14, fontWeight: "bold" }}>
              Près de toi
            </Text>
          </View>
          <View>
            {showAllCards ? null : (
              <Text
                style={{ color: COLORS.grey, fontSize: 12 }}
                onPress={() => setShowAllCards(true)}
              >
                Voir plus
              </Text>
            )}
          </View>
        </View>
        <View style={{ marginTop: 17 }}>
          <FlatList
            contentContainerStyle={{ paddingLeft: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => <Card place={item} />}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
            marginTop: 20,
          }}
        >
          <View>
            <Text style={{ color: COLORS.dark, fontSize: 14, fontWeight: "bold" }}>
              Près de toi
            </Text>
          </View>
          <View>
            {showAllCards ? null : (
              <Text
                style={{ color: COLORS.grey, fontSize: 12 }}
                onPress={() => setShowAllCards(true)}
              >
                Voir plus
              </Text>
            )}
          </View>
        </View>
        <View>
          <FlatList
            data={visibleHouses}
            renderItem={({ item }) => <CardHouse house={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
 };


const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  buttonContainer1: {
    backgroundColor: COLORS.blue,
    borderRadius: 30,
    margin: 10,
  },
  sortBtn: {
    backgroundColor: COLORS.blue,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    borderColor: COLORS.blue,
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    justifyContent: "center",
    borderColor: COLORS.red,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: "100%",
  },
  optionListsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  categoryListText: {
    fontSize: 16,
    color: COLORS.grey,
    padding: 12,
  },
  activeCategoryListText: {
    backgroundColor: COLORS.blue,
    paddingHorizontal: 12,
    textDecorationLine: "none",
    borderRadius: 12,
    color: COLORS.white,
  },
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingHorizontal: 10,
  },
  CardHouseCont: {
    height: 110,
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    width: "95%",
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
    padding: 10,
  },
  cardImages: {
    width: 120,
    height: 90,
    borderRadius: 10,
  },
  facility: { flexDirection: "row", marginRight: 15 },
  facilityText: { marginLeft: 5, color: COLORS.grey },
});

export default HomeScreen;
