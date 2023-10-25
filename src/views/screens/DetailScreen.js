import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import COLORS from '../../const/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

const dakarCoordinates = { latitude: 14.6928, longitude: -17.4467 };
const { width } = Dimensions.get('screen');

const InteriorCard = ({ interior }) => {
  return <Image source={interior} style={styles.interiorImage} />;
};

const DetailScreen = ({ navigation, route }) => {
  const house = route.params;
  const navigations = useNavigation();

  const handleNavigateToLogin = () => {
    navigations.navigate('welcomScreen');
  };

  const phoneNumber = '77 855 84 21'; // Remplacez par le numéro de téléphone souhaité

  const handleWhatsappButtonClick = () => {
    const whatsappURL = `whatsapp://send?phone=${phoneNumber}`;

    // Ouvrir WhatsApp si l'application est installée
    Linking.canOpenURL(whatsappURL)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(whatsappURL);
        } else {
          // Gérer le cas où WhatsApp n'est pas installé
          console.error("WhatsApp n'est pas installé.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //  fonction tel
  const phonNumber = '78 855 84 21'; // Remplacez par le numéro de téléphone souhaité

  const handlePhoneButtonClick = () => {
    const phoneURL = `tel:${phonNumber}`;

    // Ouvrir l'application de téléphone pour composer le numéro
    Linking.canOpenURL(phoneURL)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(phoneURL);
        } else {
          // Gérer le cas où l'ouverture de l'application de téléphone n'est pas prise en charge
          console.error("L'ouverture de l'application de téléphone n'est pas prise en charge.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [location, setLocation] = useState(null);
  const [errorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.backgroundImageContainer}>
        <ImageBackground style={styles.backgroundImage} source={house.im}>
          <View style={styles.header}>
            <View style={styles.headerBtn}>
               <Icon
                name="arrow-back-ios"
                size={20}
                color={COLORS.white}
                onPress={navigation.goBack}
               />
            </View>
            <View style={styles.headerBtn}>
              <Icon name="turned-in-not" size={20} color={COLORS.white} />
            </View>
          </View>

          <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
            <Text style={{ color: COLORS.white, fontWeight: '500', fontSize: 16, marginTop: 5 }}>
              {house.location}
            </Text>
            <Text style={{ color: COLORS.white, fontSize: 14, marginTop: 5 }}>
              {house.ref}
            </Text>

            <View style={{ marginTop: 10, flexDirection: 'row' }}>
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

      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: '500', color: COLORS.dark }}>Description</Text>
        <Text style={{ fontSize: 12, fontWeight: 400, color: COLORS.grey }}>
          La maison sur 3 niveaux au design moderne dispose d'une grande piscine et d'un garage pouvant accueillir jusqu'à
          quatre voitures...<Text style={{ color: COLORS.blue }}>Show More</Text>
        </Text>
        <View style={styles.header1}>
          <View style={{ flex: 1, flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <TouchableOpacity onPress={handleNavigateToLogin}>
              <Text style={styles.headerBtn13}> louer</Text>
            </TouchableOpacity>
          </View>
          <Text> Prix : 50.0000 fcfa/mois</Text>
        </View>

        <View>
          <Text style={{ fontSize: 16, marginTop: -12, fontWeight: '500', color: COLORS.dark }}>Gallery</Text>
          
          <FlatList
            style={{ height: 90 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={house.interiors}
            renderItem={({ item }) => <InteriorCard interior={item} />}
          />
        </View>
        
        <View style={{ 
          
          flex: 1, 
         height: 30, 
         paddingHorizontal:10,
         paddingTop:10,
         
        
         }}>
          <View
            style={{
              width: '100%',
            }}
          >
            <MapView
              showsMyLocationButton={true}
              showsUserLocation={true}
              style={styles.map}
              initialRegion={{
                latitude: dakarCoordinates.latitude,
                longitude: dakarCoordinates.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={dakarCoordinates}
                title="Dakar"
                description="La belle ville de Dakar"
              />
            </MapView>
          </View>
        </View>
        
        
      </View>
      <View >
        <Text  > Rip.2.500.000f/Année</Text>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    overflow: 'hidden', // Pour appliquer le border radius
    borderRadius: 10,
    height: 120, // Hauteur de la carte
  },
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
    height: 200,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  header1: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBtn2: {
    height: 30,
    width: 50,
    backgroundColor: COLORS.grey,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBtn12: {
    height: 30,
    width: 40,
    marginLeft: 5,
    backgroundColor: COLORS.blue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBtn13: {
    marginLeft: 5,
    backgroundColor: COLORS.blue,
    paddingHorizontal: 20,
    paddingVertical: 7,
    color: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facilityDetails: {
    flexDirection: 'row',
    marginRight: 15,
  },
  facilityTextDetails: {
    marginLeft: 5,
    fontSize: 12,
    marginTop: 5,
    color: COLORS.grey,
  },
});

export default DetailScreen;
