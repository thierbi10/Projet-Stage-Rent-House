
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import COLORS from '../../const/color'
import { auth } from '../../firbase';
import { signInWithEmailAndPassword } from 'firebase/auth';

 

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNavigateToRegister = () => {
    navigation.navigate('RegisterScreen');
  };
//   const navigation = useNavigation()

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user) {
//         navigation.replace("Home")
//       } 
//     })

//     return unsubscribe
//   }, [])

  
  const handleLogin = () => {
    signInWithEmailAndPassword (auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
    <Text style={styles.loginText}>Connectez-vous et continuez</Text> 
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
       
         
        <View style={{  justifyContent:'space-between', flexDirection:'row', marginTop:25, marginBottom:20,}}>
        <TouchableOpacity 
        // onPress={handleForgotPasswordClick}
        >
          <Text style={styles.forgotPasswordText}>Mot de passe oublié</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigateToRegister}>
        <Text style={styles.forgotPasswordText}>S'inscrire</Text>
      </TouchableOpacity>

        </View>

      </View>  

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
       
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen
      
const styles = StyleSheet.create({
  container: {
  flex:1,
  justifyContent:'center',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal:10
  },
  forgotPasswordText: {
    color: 'blue', // Couleur bleue
    textDecorationLine: 'underline', // Souligné pour indiquer que c'est un lien
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal:10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  loginText: {
    color: COLORS.dark,
    fontWeight: '700',
    textAlign:'center',
    alignItems:'center',
    paddingHorizontal:10,
    fontSize: 18,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})