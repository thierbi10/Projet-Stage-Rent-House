












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
            Create a account
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
           create an account so  you can expore all the existing house
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
           already have a account
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












// import { useNavigation } from '@react-navigation/core'
// import React, { useEffect, useState } from 'react'
// import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import COLORS from '../../const/color'
// import {createUserWithEmailAndPassword } from "firebase/auth"

// import { auth } from '../../firbase'
// // import { auth } from '../firebase'

// const RegisterScreen = () => {
//   const [nom, setNom] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

// //   const navigation = useNavigation()

// //   useEffect(() => {
// //     const unsubscribe = auth.onAuthStateChanged(user => {
// //       if (user) {
// //         navigation.replace("Home")
// //       } 
// //     })

// //     return unsubscribe
// //   }, [])

//   const handleSignUp = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(userCredentials => {
//         const user = userCredentials.user;
//         console.log('Registered with:', user.email);
//       })
//       .catch(error => alert(error.message))
//   }


//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior="padding"
//     >
//      <Text style={styles.loginText}>Inscription</Text> 
   
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Nom"
//           value={nom}
//             onChangeText={text => setNom(text)}
//           style={styles.input}
//         />
//          <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={text => setEmail(text)}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={text => setPassword(text)}
//           style={styles.input}
//           secureTextEntry
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//         onPress={handleSignUp} 
//           style={styles.button}
//         >
//           <Text style={styles.buttonText}>S'inscrire</Text>
//         </TouchableOpacity>
        
//       </View>
//     </KeyboardAvoidingView>
//   )
// }

// export default RegisterScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent:'center',
//     alignItems: 'center',
//      paddingHorizontal:10,
//      marginTop:'25%',
//      height : 100
//   },
//   inputContainer: {
//     width: '100%',
//     paddingHorizontal:10
//   },
//   input: {
//     backgroundColor: 'white',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginTop: 15,
//   },
//   buttonContainer: {
//     width: '100%',
//     paddingHorizontal:10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   button: {
//     backgroundColor: '#0782F9',
//     width: '100%',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonOutline: {
//     backgroundColor: 'white',
//     marginTop: 5,
//     borderColor: '#0782F9',
//     borderWidth: 2,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '700',
//     textAlign:'center',
//     fontSize: 16,
//   },
//   loginText: {
//     color: COLORS.dark,
//     fontWeight: '700',
//     fontSize: 18,
//   },
//   buttonOutlineText: {
//     color: '#0782F9',
//     fontWeight: '700',
//     fontSize: 16,
//   },
// })