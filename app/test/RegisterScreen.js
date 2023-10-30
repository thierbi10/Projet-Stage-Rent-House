
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/FontAwesome';

// import { axios } from "axios";
// import axios from 'axios';


import COLORS from "../../src/const/color";
import Input from "../../src/components/Input";
import { Link, router } from "expo-router";
import { auth } from "../../src/firbase";
import { createUserWithEmailAndPassword } from "firebase/auth";




const RegisterScreen = () => {
  
// const navigation = useNavigation();
const [userName, setUserName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


  const handleSignUp = () => {
    createUserWithEmailAndPassword (auth, email, password)
      .then(userCredentials => {
    const user = userCredentials.user;
        console.log('Registered with:', user.email);
        const path =    router.push({pathname: "/Achat/AchatScreen"});
        console.log(path);
        // setDoc(doc(db, "users", user.uid), {
        //   prenom: prenom,
        //   nom: nom, 
        //   email: email,
        //   user_type: "admin",
        //   registeredAt: Timestamp.fromDate(new Date()),
        // });

        
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          alert("Utilisateur existant !");
        }else if(errorCode === 'auth/weak-password'){
          alert("Mot de passe faible, utlisez minimum 6 caractères !")
        }else if(errorCode === 'email-already-in-use'){
          alert("Email déjà utiliser !")
        }else if(errorCode === "auth/invalid-email"){
          alert("Adresse Email non valide !")
        }
      });

  }


  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the value in ';
    if (id === null || id === '') {
        isproceed = false;
        errormessage += ' Username';
    }
    if (name === null || name === '') {
        isproceed = false;
        errormessage += ' Fullname';
    }
    if (password === null || password === '') {
        isproceed = false;
        errormessage += ' Password';
    }
    if (email === null || email === '') {
        isproceed = false;
        errormessage += ' Email';
    }

    if(!isproceed){
        toast.warning(errormessage)
    }else{
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

        }else{
            isproceed = false;
            toast.warning('Please enter the valid email')
        }
    }
    return isproceed;
}


// const handlesubmit = (e) => {
//         e.preventDefault();
//         let regobj = { userName, password, email, };
//         // if (IsValidate())
         
//         console.log(regobj);
//         fetch("http://localhost:3000/api/users/signup", {
//             method: "POST",
//             headers: { 'content-type': 'application/json' },
//             body: JSON.stringify(regobj)
//         }).then((res) => {
//             alert('Registered successfully.')
//             // navigate('/login');
//         }).catch((err) => {
//             alert('Failed :' + err.message);
//             console.log(err);
//         });
    
// }



// const handlesubmit = (e) => {
//   e.preventDefault();
//   let regobj = { userName, password, email };

//   console.log(regobj);

//   axios
//     .post('http://localhost:3000/api/users/signup', regobj)
//     .then((res) => {
//       alert('Inscription réussie.');
//       // Naviguez vers '/login' ou effectuez d'autres actions nécessaires.
//     })
//     .catch((err) => {
//       alert('Échec : ' + err.message);
//       console.log(err);
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
          }}
        >
          <Text
            style={{
              fontSize: 38,
              //  fontWidth:'bold',
              color: COLORS.blue,
              marginTop: 30,
            
            }}
      
          >
             créez un compte
          </Text>
          <Text
            style={{
              fontSize: 16,
              maxWidth: "70%",
              textAlign: "center",
              marginVertical:20,
              
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
               value={userName}
               onChangeText={text => setUserName(text)}
          
          />
          <Input placeholder="Email"
               value={email}
               onChangeText={text => setEmail(text)}
          
          />
          <Input placeholder="Password" 
           value={password}
           onChangeText={text =>  setPassword(text)} 
          /> 
        </View> 

      
 
         {/* <Link href='/test/AchatScreen' */}
         <View>
         <TouchableOpacity
      onPress={handleSignUp}
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
        color: COLORS.lightBlue,
        textAlign: "center",
        fontSize: 21,
      }}
    >
      S'incrire
    </Text>
    </TouchableOpacity>
    </View>
  {/* </Link> */}
  <Link href="/Achat/AchatScreen"  >
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  fff:{

  }
});









