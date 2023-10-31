import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import COLORS from "../../src/const/color";
import Input from "../../src/components/Input";
import { Link} from "expo-router";
import { auth } from "../../src/firbase";
import { signInWithEmailAndPassword } from "firebase/auth";





const Test = () => {
  // const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword (auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        console.log('12');
        //  router.push({pathname: "/Achat/AchatScreen"});
         router.push({pathname: "/Achat/AchatScreen"});
         
         console.log('13');
   
      })
      .catch((error) => {
        const errorCode = error.code;
        if(errorCode === "auth/network-request-failed"){
          alert("Impossible de se connecter, votre connexion est faible !");
        } else if(errorCode === "auth/invalid-email ") {
          alert("l'email est invalid");
        }
        else{
          alert("Utilisateur introuvable ou mot de passe incorect!");
        }
        console.log(errorCode);
      });

  }

  // const handleLogin = () => {
  //    userLogin
  // ({ email: email, password: password })
  //     .then((result) => {
  //       if (result.status == 200) {
  //         AsyncStorage.setItem("AcessToken", result.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            padding: 10,
          }}
        >
          <View
            style={{
              alignItems: "center",
              // fontWeight: "700"
            }}
          >
            <Text
              style={{
                fontSize: 35,
                // fontWidth:'bold',
                color: COLORS.blue,
                marginVertical: 30,
              }}
              //  onPress={handleLogin}
            >
              Connectez-vous ici
            </Text>
            <Text
              style={{
                fontSize: 20,
                maxWidth: "60%",
                textAlign: "center",
              }}
            >
              Bon retour, tu nous as manqué !
            </Text>
          </View>
          <View
            style={{
              marginVertical: 30,
            }}
          >
            <Input
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Input
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View>
            <Text
              style={{
                // fontFamily: Font["poppins-semiBold"],
                fontSize: 14,
                color: COLORS.blue,
                alignSelf: "flex-end",
                marginTop: -20,
              }}
            >
              Mot de passe oublié ?
            </Text>
          </View>
          <View>
            
          <TouchableOpacity
  onPress={handleLogin}
  style={{
    padding: 10,
    backgroundColor: COLORS.blue,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center", // Utilisez "alignItems" pour centrer horizontalement
    shadowColor: COLORS.blue,
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
      color: COLORS.white,
      fontSize: 18,
      textAlign: "center",
    }}
  >
    Se connecter
  </Text>
</TouchableOpacity>
          </View>
        
          {/* </Link> */}
          <Link
            href="/test/RegisterScreen"
            // onPress={() => navigate("Register")}
            style={{
              padding: 10,
              marginTop: 20,
              textAlign: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.dark,
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Créer un nouveau compte
            </Text>
          </Link>
          <View
            style={{
              marginTop: 50,
            }}
          >
            <Text
              style={{
                color: COLORS.dark,
                textAlign: "center",
                fontSize: 15,
              }}
            >
              Ou continuez avec
            </Text>

            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: COLORS.grey,
                  borderRadius: 5,
                  marginHorizontal: 10,
                }}
              >
                <Icon name="google" color={COLORS.white} size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: COLORS.grey,
                  borderRadius: 20,
                  marginHorizontal: 10,
                }}
              >
                <Ionicons name="logo-apple" color={COLORS.white} size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: COLORS.grey,
                  borderRadius: 5,
                  marginHorizontal: 10,
                }}
              >
                <Ionicons name="logo-facebook" color={COLORS.white} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({});
