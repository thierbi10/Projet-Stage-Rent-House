import React from "react";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../const/color"; // Importez vos couleurs depuis le fichier de constantes
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        {/* Image d'accueil */}
        <ImageBackground
          style={{
            height: height / 2.5,
          }}
          resizeMode="contain"
          source={require("../../assets/welcome-img.png")}
        />
        {/* Texte d'accueil */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 34,
              color: COLORS.blue, // Utilisation de la couleur depuis COLORS
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Découvrez la maison de vos rêves ici
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: COLORS.dark, // Utilisation de la couleur depuis COLORS
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Explorez toutes les maisons qui existent en fonction de vos envies et de vos possibilités financières
          </Text>
        </View>
        {/* Boutons "Login" et "Register" */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 40,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("testScreen")}
            style={{
              backgroundColor: COLORS.blue, // Utilisation de la couleur depuis COLORS
              paddingVertical: 15,
              paddingHorizontal: 12,
              width: "48%",
              borderRadius: 10,
              shadowColor: COLORS.white, // Utilisation de la couleur depuis COLORS
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.3,
              shadowRadius: 10,
            }}
          >
            <Text
              style={{
                color: COLORS.white, // Utilisation de la couleur depuis COLORS
                fontSize: 22,
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
            style={{
              paddingVertical: 15,
              paddingHorizontal: 20,
              width: "48%",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: COLORS.dark, // Utilisation de la couleur depuis COLORS
                fontSize: 22,
                textAlign: "center",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  cffx: {
    // Styles pour le composant non défini "cffx"
  }
});
