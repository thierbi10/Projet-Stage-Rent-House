import React, { useRef, useState } from 'react';
import {
  Image,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  PanResponder,
  TouchableWithoutFeedback,
} from 'react-native';
import home from '../../assets/icons/home.png';
import chat from '../../assets/icons/chat.png';
import badge from '../../assets/icons/badge.png';
import intro from '../../assets/icons/intro.png';
import location from '../../assets/icons/location.png';
import notif from '../../assets/icons/notif.png';
import profil from '../../assets/icons/profil.png';
import logout from '../../assets/icons/logout.png';
import parametre from '../../assets/icons/parametre.png';
import HomeScreen from './HomeScreen';

export default function AppScreen() {
  // État pour suivre l'onglet actuel
  const [currentTab, setCurrentTab] = useState('Home');
  // État pour gérer l'état de la barre latérale (ouverte ou fermée)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Références pour les animations
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  // Gestion des gestes pour ouvrir et fermer la barre latérale
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return gestureState.dx > 50;
    },
    onPanResponderGrant: () => {},
    onPanResponderMove: (_, gestureState) => {},
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 50) {
        toggleSidebar();
      }
    },
  });

  // Fonction pour ouvrir ou fermer la barre latérale
  const toggleSidebar = () => {
    Animated.timing(scaleValue, {
      toValue: isSidebarOpen ? 1 : 0.88,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(offsetValue, {
      toValue: isSidebarOpen ? 0 : 230,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(closeButtonOffset, {
      toValue: isSidebarOpen ? -30 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setIsSidebarOpen(!isSidebarOpen);
  };

  // Tableau des onglets
  const tabs = [
    { title: 'Home', image: home },
    { title: 'Profile', image: profil },
    { title: 'Nearby', image: location },
    { title: 'Bookmark', image: badge },
    { title: 'Notification', image: notif },
    { title: 'Message', image: chat },
    { title: 'Setting', image: parametre },
    { title: 'Help', image: intro },
    { title: 'Logout', image: logout },
  ];

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (isSidebarOpen) {
          toggleSidebar();
        }
      }}>
      <SafeAreaView style={styles.container}>
        <View style={{ flexGrow: 1, marginTop: 10 }}>
          {tabs.map((tab, index) => (
            <TabButton
              key={index}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              title={tab.title}
              image={tab.image}
            />
          ))}
        </View>

        <Animated.View
          {...panResponder.panHandlers}
          style={{
            flexGrow: 1,
            backgroundColor: 'white',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 0,
            paddingVertical: 0,
            borderRadius: isSidebarOpen ? 19 : 0,
            // Transformations pour l'animation de la barre latérale
            transform: [{ scale: scaleValue }, { translateX: offsetValue }],
          }}>
          <HomeScreen
            isSidebarOpen={isSidebarOpen}
          />
          <TouchableOpacity
            onPress={toggleSidebar}
            style={{
              top: 20,
              left: 20,
              zIndex: 1,
              borderRadius: isSidebarOpen ? 10 : 0,
            }}>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

// Composant pour les boutons d'onglet
const TabButton = ({ currentTab, setCurrentTab, title, image }) => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        paddingTop: 50,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 2,
          backgroundColor: currentTab === title ? 'white' : 'transparent',
          marginTop: 10,
          height: 90,
          paddingLeft: 10,
          borderTopRightRadius: 32,
          borderBottomEndRadius: 32,
          height: 50,
        }}>
        <Image
          source={image}
          style={{
            width: 14,
            height: 14,
            marginTop: 5,
            paddingHorizontal: 5,
            justifyContent: 'center',
            paddingVertical: 5,
            paddingHorizontal: 5,
            tintColor: currentTab === title ? '#6e8ad8' : 'white',
          }}
        />
        <Text
          style={{
            fontSize: 16,
            paddingLeft: 15,
            lineHeight: 18,
            borderRadius: 28,
            paddingRight: 40,
            overflow: 'hidden',
            color: currentTab === title ? '#6e8ad8' : 'white',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e8ad8',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
