
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/FontAwesome';


import { useNavigation } from "@react-navigation/native";
import COLORS from "../../const/color";
import Input from "../../components/Input";
import { auth } from "../../firbase";
import { createUserWithEmailAndPassword } from "firebase/auth";

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firbase";



const RegisterScreen = () => {
  
const navigation = useNavigation();
const [nom, setNom] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


  const handleSignUp = () => {
    createUserWithEmailAndPassword (auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        navigation.navigate("AchatScreen")
        console.log('Registered with:', user.email);
        
      })
      .catch(error => alert(error.message))
  }
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: COLORS.blue,
              marginTop: 30,
            
            }}
      
          >
             créez un compte
          </Text>
          <Text
            style={{
              fontSize: 14,
              maxWidth: "70%",
              textAlign: "center",
              marginTop:10,
              fontWeight:'bold'
            }}
          >
           
       créez un compte pour pouvoir explorer toute la maison existante
          </Text>
        </View>
           <View
          style={{
            marginVertical:15,
          }}
        >
         <Input placeholder="Nom"
               value={nom}
               onChangeText={text => setNom(text)}
          
          />
          <Input placeholder="Email"
               value={email}
               onChangeText={text => setEmail(text)}
          
          />
          <Input placeholder="Password" 
          value={password}
           onChangeText={text => setPassword(text)} 
          /> 
        </View> 

      

        <TouchableOpacity
     onPress={handleSignUp}
    style={{
      padding: 10,
      backgroundColor: COLORS.blue,
      marginVertical: 0,
      borderRadius: 10,
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
        textAlign: "center",
        fontSize: 21,
      }}
    >
      Sign up
    </Text>
  </TouchableOpacity>
          <TouchableOpacity
          // onPress={() => navigate("Register")}
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              color: COLORS.dark,
              textAlign: "center",
              fontSize: 14,
              marginTop:15,
              fontWeight:'bold'
              
            }}
          >
        Vous avez déjà un compte
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              color: COLORS.dark,
              textAlign: "center",
              fontSize: 15,
              marginTop:39,
            }}
          >
            Or continue with
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
              <Icon
                name="google"
                color={COLORS.white}
                size={ 20}
              />

            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: COLORS.grey,
                borderRadius:  20,
                marginHorizontal: 10,
              }}
            >
              <Ionicons
                name="logo-apple"
                color={COLORS.white}
                size={20}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: COLORS.grey,
                borderRadius: 5,
                marginHorizontal: 10,
              }}
            >
              <Ionicons
                name="logo-facebook"
                color={COLORS.white}
                size={ 20}
              />
            </TouchableOpacity>
          </View>
        </View> 
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  fff:{
  }
});









