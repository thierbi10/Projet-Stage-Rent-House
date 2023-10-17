

import React from 'react';
import { SafeAreaView, StyleSheet, View,Image, Text, ImageBackground, FlatList,Dimensions, ScrollView, TouchableOpacity, Linking } from 'react-native';
import COLORS from '../../const/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconf from 'react-native-vector-icons/FontAwesome';
const {width} = Dimensions.get('screen');
import houseData from '../../const/houseData';
import { useNavigation } from '@react-navigation/native';

const InteriorCard= ({interior}) => {
  return   <Image source={interior} style={style.interiorImage} />;
};  
   
const DetailScreen = ({navigation,route}) =>{
    const house = route.params;
    const navigations = useNavigation();
  const handleNavigateTologin = () => {
    navigations.navigate('welcomScreen');
  };

  const phoneNumber = '77 855 84 21'; // Remplacez par le numéro de téléphone souhaité

  const handleWhatsappButtonClick = () => {
    const whatsappURL = `whatsapp://send?phone=${phoneNumber}`;
    
    // Ouvrir WhatsApp si l'application est installée
    Linking.canOpenURL(whatsappURL)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(whatsappURL);
        } else {
          // Gérer le cas où WhatsApp n'est pas installé
          console.error("WhatsApp n'est pas installé.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //  fonction tel
  const phonNumber = '78 855 84 21'; // Remplacez par le numéro de téléphone souhaité

  const handlePhoneButtonClick = () => {
    const phoneURL = `tel:${phonNumber}`;
    
    // Ouvrir l'application de téléphone pour composer le numéro
    Linking.canOpenURL(phoneURL)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(phoneURL);
        } else {
          // Gérer le cas où l'ouverture de l'application de téléphone n'est pas prise en charge
          console.error("L'ouverture de l'application de téléphone n'est pas prise en charge.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

    return (
      <SafeAreaView style={{ flex:1, backgroundColor:COLORS.white}}>   
            <View style={style.backgroundImageContainer}>
             <ImageBackground style={style.backgroundImage} source={house.im}> 
             <View style={style.header}>
               <View style={style.headerBtn}>
                <Icon
                  name="arrow-back-ios"
                  size={20}
                  color={COLORS.white}
                  onPress={navigation.goBack}
                />
              </View>
              <View style={style.headerBtn}>
                <Icon name="turned-in-not" size={20} color={COLORS.white} />
              </View>
            </View> 

            <View style={{ paddingHorizontal:10, marginTop:10}} >
       
       <Text style={{color: COLORS.white, fontWeight:500, fontSize: 16, marginTop: 5}}>
         {house.location}
       </Text>
       <Text style={{color: COLORS.white, fontSize: 14, marginTop: 5}}>
         {house.ref}
       </Text>
       
       <View style={{marginTop: 10, flexDirection: 'row'}}>
         <View style={style.facilityDetails}>
         <View style={style.headerBtn2}>
           <Icon name="hotel" color={COLORS.white} size={15} />
           </View>
           <Text style={style.facilityTextDetails}>2 lits</Text>
         </View>
         <View style={style.facilityDetails}>
         <View style={style.headerBtn2}>
           <Icon name="bathtub" color={COLORS.white} size={15} />
           </View>
           <Text style={style.facilityTextDetails}>4 salles de bain</Text>
         </View>
       </View>
</View>
          </ImageBackground>  
          <View style={{marginTop:10}}>
            <Text style={{fontSize:16 , fontWeight:500,  color:COLORS.dark}} >Description</Text>
            <Text style={{fontSize:12 , fontWeight:400, color:COLORS.grey}} >La maison sur 3 niveaux au design moderne dispose d'une grande piscine et d'un garage pouvant accueillir jusqu'à quatre voitures... <Text style={{color:COLORS.blue}}>Show More</Text> </Text>
            <View style={style.header1}>
              <View style={{ flex:1,   flexDirection: 'row' , gap:10 ,alignItems:'center'}} >
              <TouchableOpacity onPress={handleNavigateTologin}>
              <Text style={style.headerBtn13} > louer</Text>   
        
               </TouchableOpacity>             
              </View >
              <Text> Prix :50.0000 fcfa/mois</Text>
              
            </View> 
            
            <View style={style.header1}>
              <View style={{ flex:1,   flexDirection: 'row' , gap:10 ,alignItems:'center'}} >
              <Image  style={{width:50 , height:50 ,borderRadius:50}} source={require('../../assets/person.jpg')} />
                <View>
                  <Text style={{fontSize:16 , fontWeight:500,  color:COLORS.dark}} >Garry Allen</Text>
                  <Text style={{fontSize:12 , fontWeight:400, color:COLORS.grey}}>Owner</Text>
                  
                </View>
              </View >
              <TouchableOpacity style={style.headerBtn12} onPress={handlePhoneButtonClick}>
           <Icon name="phone" size={20} color={COLORS.white} />
         </TouchableOpacity>
              <TouchableOpacity style={style.headerBtn12}  onPress={handleWhatsappButtonClick}>
                <Iconf name="whatsapp" size={20} color={COLORS.white} />
              </TouchableOpacity>
              <View style={style.headerBtn12}>
                <Icon name="message" size={20} color={COLORS.white} />
              </View>
              {/* <View style={style.headerBtn12}>
                <Icon name="phone" size={20} color={COLORS.white} />
              </View>
              <View style={style.headerBtn12}>
                <Icon name="message" size={20} color={COLORS.white} />
              </View> */}
            </View> 
          {/* glalery */}
          <View>
          <Text style={{fontSize:16 , marginTop:-12, fontWeight:500, color:COLORS.dark}} >Gallery</Text>
      
           {/* <FileList /> */}
            <FlatList style={{ height:30, }}
            
             horizontal
             showsHorizontalScrollIndicator={false}
             // keyExtractor={(item) => item.id.toString()}
             data={house.interiors}
             renderItem={({item}) => <InteriorCard interior={item} />}
            
    
            />    
       
       
         
          </View>
          </View>
          </View>
          
        </SafeAreaView>
           
        )
}
const style= StyleSheet.create({
    backgroundImageContainer: {
        elevation: 20,
        marginHorizontal: 10,
        marginTop: 10,
        alignItems: 'center',
        height: 200,
      },
      backgroundImage: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
      },
       scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
      header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      },
      header1: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal: 0,
      },
      interiorImage: {
        width: width / 3 -14,
        height: 80,
        marginTop:10,
        marginRight: 10,
        borderRadius: 10,
      },
      headerBtn: {
        height: 40,
        width: 40,
        backgroundColor: COLORS.grey,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerBtn2: {
        height: 30,
        width: 50,
        backgroundColor: COLORS.grey,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerBtn12: {
        height: 30,
        width: 40,
        marginLeft:5,
        backgroundColor: COLORS.blue,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerBtn13: {
      
        marginLeft:5,
        backgroundColor: COLORS.blue,
        paddingHorizontal:20,
        paddingVertical: 7,
        color:COLORS.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      ratingTag: {
        height: 30,
        width: 35,
        backgroundColor: COLORS.blue,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      facilityDetails: {flexDirection: 'row', marginRight: 15, },
      facilityTextDetails: {marginLeft: 5,fontSize:12, marginTop:5, color: COLORS.grey,},
})
export default DetailScreen;