import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import COLORS from "../src/const/color";
import Icon from "react-native-vector-icons/MaterialIcons";
import Iconf from "react-native-vector-icons/FontAwesome";
import { Link, useRouter } from 'expo-router';
import MapView from 'react-native-maps';
import { ScrollView } from "react-native-virtualized-view";

const interiors = [
  require('../src/assets/interior1.jpg'),
  require('../src/assets/interior2.jpg'),
  require('../src/assets/interior3.jpg'),
]
const { width } = Dimensions.get("window");

const InteriorCard = ({ interior }) => {
  return <Image source={interior} style={styles.interiorImage} />;
};



const DetailScreen = () => {

 
  const route = useRouter();
  const house = route.params;
  const phoneNumber = "77 855 84 21";

  const handleWhatsappButtonClick = () => {
    const whatsappURL = `whatsapp://send?phone=${phoneNumber}`;
    Linking.canOpenURL(whatsappURL)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(whatsappURL);
        } else {
          console.error("WhatsApp n'est pas installé.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePhoneButtonClick = () => {
    const phoneURL = `tel:${phoneNumber}`;
    Linking.canOpenURL(phoneURL)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(phoneURL);
        } else {
          console.error("L'ouverture de l'application de téléphone n'est pas prise en charge.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  

 

  return (
    <SafeAreaView >
      <ScrollView>
            <View style={styles.backgroundImageContainer}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../src/assets/house1.jpg")}
        >
          <View style={styles.header}>
            <View style={styles.headerBtn}>
              <Icon
                name="arrow-back-ios"
                size={20}
                color={COLORS.white}
              />
            </View>
            <View style={styles.headerBtn}>
              <Icon name="turned-in-not" size={20} color={COLORS.white} />
            </View>
          </View>

          <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
            <Text
              style={{
                color: COLORS.white,
                fontWeight: '500',
                fontSize: 16,
                marginTop: 5,
              }}
            >
              Jl. Sultan Iskandar Mudas
            </Text>
            <Text style={{ color: COLORS.white, fontSize: 14, marginTop: 5 }}>
              Jl. Sultan Iskandar Mudas
            </Text>

            <View style={{ marginTop: 10, flexDirection: "row" }}>
              <View style={styles.facilityDetails}>
                <View style={styles.headerBtn2}>
                  <Icon name="hotel" color={COLORS.white} size={15} />
                </View>
                <Text style={styles.facilityTextDetails}>2 lits</Text>
              </View>
              <View style={styles.facilityDetails}>
                <View style={styles.headerBtn2}>
                  <Icon name="bathtub" color={COLORS.white} size={15} />
                </View>
                <Text style={styles.facilityTextDetails}>4 salles de bain</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        </View>
    {/* <ScrollView> */}

        <View style={{ marginTop: 10 , paddingHorizontal:10,}}>
          <Text style={{ fontSize: 16, fontWeight: '500', color: COLORS.dark }}>
            Description
          </Text>
          <Text style={{ fontSize: 12, fontWeight: 400, color: COLORS.grey }}>
            La maison sur 3 niveaux au design moderne dispose d'une grande
            piscine et d'un garage pouvant accueillir jusqu'à quatre voitures...{" "}
            <Text style={{ color: COLORS.blue }}>Show More</Text>{" "}
          </Text>
           {/* <View style={styles.header1}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}
            >
              <Link  style={styles.headerBtn13}  href="/test/test"> 
                <Text> Réserver</Text>
         </Link>  
            </View>
            <Text> Prix : 150.0000 fcfa/mois</Text>
          </View> */}

          <View style={styles.header1}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={require("../src/assets/person.jpg")}
              />
              <View>
                <Text
                  style={{ fontSize: 16, fontWeight: '500', color: COLORS.dark }}
                >
                  Garry Allen
                </Text>
                <Text
                  style={{ fontSize: 12, fontWeight: 400, color: COLORS.grey }}
                >
                  Owner
                </Text>
              </View>
            </View>
            <TouchableOpacity
             style={styles.headerBtn12}
              onPress={handlePhoneButtonClick}
            >
              <Icon name="phone" size={20} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerBtn12}
              onPress={handleWhatsappButtonClick}
            >
              <Iconf name="whatsapp" size={20} color={COLORS.white} />
            </TouchableOpacity>
            <View style={styles.headerBtn12}>
              <Icon name="message" size={20} color={COLORS.white} />
            </View>
          </View>
          {/* Galerie */}
          <View>
            <Text
              style={{
                fontSize: 16,
                marginTop: -12,
                fontWeight: '500',
                color: COLORS.dark,
              }}
            >
              Gallery
            </Text>
            <FlatList
              // style={{ height: 200 }}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={interiors}
              renderItem={({ item }) => <InteriorCard interior={item} />}
            />
             <View
              style={{
                // flex: 1,
                // height: 40,
                // borderRadius: 20,
                
                // // marginTop:20,
                // // paddingHorizontal: 10,
                // paddingTop: 20,
              }}
            >
              <View
                style={{
                  flex:1,
                  height:150,
                marginVerticale: 10,
                   marginTop:20,
                   marginBottom:20,
                  
                }}
              >
                 <MapView style={styles.map}
                 initialRegion={{
                  latitude: 14.6928, 
    longitude: -17.4467 ,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
                }}
                 />
                </View>
                <View style={styles.header1}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}
            >
              <Text style={{color:COLORS.white}} > Prix : 150.0000 fcfa/mois</Text>
            </View>
            
            <Link  style={styles.headerBtn13}  href="/test/test"> 
                <Text> louer  </Text>
         </Link> 
          </View>
              
            </View> 
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    borderRadius: 10,
    height: 120,
    marginTop: -100
  }, map: {
    width: '100%',
    height:250,
  },

  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: "center",
    height: 200,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  header1: {
    paddingVertical: 20,
    margin:10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  interiorImage: {
    width: width / 3 - 14,
    height: 80,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  headerBtn: {
    height: 40,
    width: 40,
    backgroundColor: COLORS.grey,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerBtn2: {
    height: 30,
    width: 50,
    backgroundColor: COLORS.grey,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerBtn12: {
    height: 30,
    width: 40,
    marginLeft: 5,
    backgroundColor: COLORS.blue,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerBtn13: {
    marginLeft: 5,
    backgroundColor: COLORS.blue,
    paddingHorizontal: 20,
    // padding:10,
    paddingVertical: 12,
    color: COLORS.white,
    borderRadius: 10,
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  facilityDetails: { flexDirection: "row", marginRight: 15 },
  facilityTextDetails: {
    marginLeft: 5,
    fontSize: 12,
    marginTop: 5,
    color: COLORS.grey,
  },
});

export default DetailScreen;
