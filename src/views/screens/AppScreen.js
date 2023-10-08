import React, { useRef, useState } from 'react';
import {
  Image,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
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
import menu from '../../assets/icons/menu.png';
import close from '../../assets/icons/close.png';
import HomeScreen from './HomeScreen';

export default function AppScreen() {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(true);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  
  const tabs = [
    { title: "Home", image: home },
    { title: "Profile", image: profil },
    { title: "Nearby", image: location },
    { title: "Bookmark", image: badge },
    { title: "Notification", image: notif },
    { title: "Message", image: chat },
    { title: "Setting", image: parametre },
    { title: "Help", image: intro },
    { title: "Logout", image: logout },
  ];



  return (
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
  style={{
    flexGrow: 1,
    backgroundColor: "white",
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: showMenu ? 19 : 0,

    // Transform
    transform: [
      { scale: scaleValue },
      { translateX: offsetValue }
    ]
  }}
>
  {/* Contenu du menu */}
  <HomeScreen />
  <TouchableOpacity
    onPress={() => {
      Animated.timing(scaleValue, {
        toValue: showMenu ? 1 : 0.88,
        duration: 300,
        useNativeDriver: true
      }).start();

      Animated.timing(offsetValue, {
        toValue: showMenu ? 0 : 230,
        duration: 300,
        useNativeDriver: true
      }).start();

      Animated.timing(closeButtonOffset, {
        toValue: !showMenu ? -30 : 0,
        duration: 300,
        useNativeDriver: true
      }).start();

      setShowMenu(!showMenu);
    }}
  >
    <Image
      source={showMenu ? close : menu}
      style={{
        width: 16,
        height: 16,
        tintColor: 'black',
        marginTop: 30,
      }}
    />
    <View>

   
    </View>
  </TouchableOpacity>
</Animated.View>

    </SafeAreaView>
  );
}

const TabButton = ({ currentTab, setCurrentTab, title, image }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "Logout") {
          // Gérer le logout ici
        } else {
          setCurrentTab(title);
        }
      }}
      style={{
        height: 60,
        paddingTop: 60
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: 'center',
          paddingVertical: 2,
          backgroundColor: currentTab === title ? 'white' : 'transparent',
          marginTop: 10,
          height: 90,
          paddingLeft: 10,
          borderTopRightRadius: 32,
          borderBottomEndRadius: 32,
          height: 50,
        }}
      >
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
            tintColor: currentTab === title ? "#0A8ED9" : 'white'
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
            color: currentTab === title ? "#0A8ED9" : 'white'
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A8ED9',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
