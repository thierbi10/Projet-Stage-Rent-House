import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";

const AchatScreen = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Feather name="chevron-left" color="#FFF" size={25} />
        </TouchableOpacity>
        <Feather name="shopping-cart" color="#FFF" size={25} />
      </View>

      <Image source={require('../../img/house1.jpg')} style={styles.img}  />

      <View style={styles.cont3}>
        <Text style={styles.title}>Appartement disponible</Text>
        <Text style={styles.subtitle}> Description </Text>
      
        
        <Text style={styles.text}> Bonjour nous louons des chambres meublées à Rufisque dans un endroit calme, accessible et sécurisée. 
        Les chambres sont composées d'une salle de bain interne ou externe bien climatisée ou ventilée, TV avec canal, WiFi gratuit...femme de ménage disponible tout les jours. Résidence bien sécurisée avec des vigils pour assurer votre bien-être. Pour plus d'infos ou photo contacter moi, appelle normal ou WhatsApp
NB: les prix sont différents car on as aussi des studios ( chambres, salon cuisine) disponible...Merci </Text>
<Text style={styles.subtitle}>Details</Text>

<View style={{
  flex:1,
  flexDirection:'row',
  justifyContent:'space-between'
  
}}>
  <View style={styles.column}>
    <Text style={styles.textes}>Chambres</Text>
    <Text style={styles.textes}>Salle de Bain</Text>
    <Text style={styles.textes}>Adresse</Text>
  </View>
  <View style={styles.column}>
    <Text style={styles.texte}>3</Text>
    <Text style={styles.texte}>2</Text>
    <Text style={styles.texte}>Dakar, Rufisque</Text>
  </View>
</View>
        
        <View style={styles.cont1}>
          <FontAwesome name="heart-o" color="#000" size={25} />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.navigation.navigate("Home")}
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AchatScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6e8ad8",
  },
  title: {
    fontSize: 25,
    
    marginTop: 30,
  },
  subtitle: {
    fontSize: 20,
    color: "#474747",
    marginTop: 10,
  

  },
  texte: {
    
    fontSize: 15,
    lineHeight: 25,
    
  },
  text: {
    
    fontSize: 15,
    lineHeight: 25,
    
  },
  textes: {
  
    fontSize: 15,
    lineHeight: 25,
    color:"#1243c9"
    
  },
  btn: {
    backgroundColor: "#1243c9",
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 30,
  },
  btnText: {
    
    fontSize: 20,
    color: "#FFF",
  },
  cont1: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 40,
  },
  c3: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: "#529CC0",
  },
  c2: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: "#529C47",
    marginHorizontal: 10
  },
  c1: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: "#E2443B",
  },
  selected: {
    borderColor: "#E2443B",
    height: 30,
    width: 30,
    borderRadius: 24,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  cont2: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  img: {
    height: "55%",
    width: "100%",
  },
  cont3: {
    flex: 1,
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: 50,
    paddingHorizontal: 20,
  },
});
