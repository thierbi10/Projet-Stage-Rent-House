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
import home from '../src/assets/icons/home.png';
import chat from '../src/assets/icons/chat.png';
import badge from '../src/assets/icons/badge.png';
import intro from '../src/assets/icons/intro.png';
import location from '../src/assets/icons/location.png';
import notif from '../src/assets/icons/notif.png';
import profil from '../src/assets/icons/profil.png';
import logout from '../src/assets/icons/logout.png';
import parametre from '../src/assets/icons/parametre.png';
import HomeScreen from '../src/components/HomeScreen';

const index = () => {
  const [currentTab, setCurrentTab] = useState('Home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

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
            // Transform
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
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e8ad8',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
}
  )