import React from 'react';
import { Text, View, ScrollView, SafeAreaView, Image, FlatList } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from '../../src/const/color'
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { styles } from './styles';
// import { SliderBox } from 'react-native-image-slider-box';
// import { SafeAreaView } from 'react-native-safe-area-context';




const interiors = [
  require('../../src/assets/interior1.jpg'),
  require('../../src/assets/interior2.jpg'),
  require('../../src/assets/interior3.jpg'),
  require('../../src/assets/interior1.jpg'),
  require('../../src/assets/interior2.jpg'),
  require('../../src/assets/interior3.jpg'),
]


const InteriorCard = ({ interior }) => {
  return <Image source={interior} style={styles.interiorImages} />;
};
const AchatScreen = () => {
  return (
    <SafeAreaView >
    <View contentContainerStyle={styles.container}> 
 
      <Image source={require('../../src/assets/house1.jpg')} style={styles.img}  />

      <ScrollView style={styles.cont3}>
      <View style={styles.header1}>
              <View style={{ flex:1,   flexDirection: 'row' , justifyContent:'space-between',alignItems:'center'}} >
              <TouchableOpacity>
        
              <Text> Prix :150.0000 fcfa/mois</Text>
               </TouchableOpacity>             
              </View >
              <TouchableOpacity onPress={() => alert("procedure de payement")}>
              <Text style={styles.headerBtn13} > Payer</Text>   
              </TouchableOpacity>
            </View> 
        <Text style={{fontSize:18 , fontWeight:500, color:COLORS.dark}}> Déscription </Text>
      
        
        <Text style={{fontSize:12 , fontWeight:400, color:COLORS.grey}}> Bonjour nous louons des chambres meublées à Rufisque dans un endroit calme, accessible et sécurisée. 
        Les chambres sont composées d'une salle de bain interne ou externe bien climatisée
        Bonjour nous louons des chambres meublées à Rufisque dans un endroit calme, accessible et sécurisée. 
        Les chambres sont composées d'une salle de bain interne ou externe bien climatiséeBonjour nous louons des chambres meublées à Rufisque dans un endroit calme, accessible et sécurisée. 
        Les chambres sont composées d'une salle de bain interne ou externe bien climatisée
        
         </Text>
<Text style={styles.subtitle}>Details</Text>
<View style={{flex:1, flexDirection: 'row' ,marginVertical:10, gap:0 ,alignItems:'center'}}>
<Icon name="location-on" size={15} color={COLORS.blue} />
 <Text style={{fontSize:12 , fontWeight:400, color:COLORS.dark}} > Dakar,hlm4,VILLA 1001</Text>




</View>

  <View style={{flex:1, flexDirection: 'row' , justifyContent:'space-between',  gap:10 ,alignItems:'center'}}>
    <Text style={styles.textes}>Chambres</Text>
    <Text style={styles.textes}>8</Text>
    
  </View>
  <View style={{flex:1, flexDirection: 'row' , justifyContent:'space-between', gap:10 ,alignItems:'center'}}>
    <Text style={styles.textes}>Salons</Text>
    <Text style={styles.textes}>2</Text>
    
  </View>
  <View style={{flex:1, flexDirection: 'row' , justifyContent:'space-between', gap:10 ,alignItems:'center'}}>
    <Text style={styles.textes}>nombre de lis</Text>
    <Text style={styles.textes}>8</Text>
    
  </View>
  <View style={{flex:1, flexDirection: 'row' , justifyContent:'space-between', gap:10 ,alignItems:'center'}}>
    <Text style={styles.textes}>salles de bain</Text>
    <Text style={styles.textes}>4</Text>
    
  </View>
  {/*<View style={styles.column}>
    <Text style={styles.texte}>3</Text>
    <Text style={styles.texte}>2</Text>
  </View>
<Text style={styles.texte}>Dakar, Rufisque</Text>*/}
      <View style={{width:'100%',  height:200, marginTop:10,}} > 
          {/* <SliderBox images={images}/> */}
          <FlatList
              style={{ height: 230 , width:'100%' , marginTop:0}}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={interiors}
              renderItem= {({ item }) => <InteriorCard interior={item} />}
            />
      </View>
        
        <View style={styles.cont1}>
          <FontAwesome name="heart-o" color="#000" size={25} />
          <TouchableOpacity
            style={styles.btn}
      
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

export default AchatScreen;


