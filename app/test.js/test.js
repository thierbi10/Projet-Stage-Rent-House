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

import COLORS from "../../src/const/color";
import Input from "../../src/components/Input";
import { Link } from "expo-router";

// import { useNavigation } from "@react-navigation/native";

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../src/firbase";

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firbase";
  

  
  const Test = () => {
    
  // const navigation = useNavigation();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  // const handleLogin = () => {
  //   signInWithEmailAndPassword (auth, email, password)
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       navigation.navigate("AchatScreen")
  //       console.log('Logged in with:', user.email);
  //     })
  //     .catch(error => alert(error.message))
  // }

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
                fontSize: 20,
                color: COLORS.blue,
                marginVertical: 30,
              }}
              //  onPress={handleLogin}
            >
              Login here
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
              marginVertical:30,
            }}
          >
            
           <Input placeholder="Email"
                 value={email}
                 onChangeText={text => setEmail(text)}
            
            />
            <Input placeholder="Password" 
            value={password}
             onChangeText={text => setPassword(text)} 
            /> 
          </View> 
  
         <View>
            <Text
              style={{
                // fontFamily: Font["poppins-semiBold"],
                fontSize: 14,
                color: COLORS.blue,
                alignSelf: "flex-end",
                marginTop:-20,
              }}
            >
      Mot de passe oublié ?
            </Text>
          </View> 
  
          <Link href='/test.js/AchatScreen'
      // onPress={handleLogin}
      
      style={{
        padding: 10,
        backgroundColor: COLORS.blue,
        marginVertical: 10,
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
        Sign in
      </Text>
      </Link>
    
    <Link href='/test.js/RegisterScreen'
            
            // onPress={() => navigate("Register")}
            style={{
              padding: 10,
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
              marginVertical: 10,
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
  
  export default Test;
  
  const styles = StyleSheet.create({});