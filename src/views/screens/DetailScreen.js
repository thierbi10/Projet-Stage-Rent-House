

import React from 'react';
import { SafeAreaView, StyleSheet, View,Image, Text, ImageBackground, FlatList,Dimensions, ScrollView } from 'react-native';
import COLORS from '../../const/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');
import houseData from '../../const/houseData';

const InteriorCard= ({interior}) => {
  return   <Image source={interior} style={style.interiorImage} />;
};
const DetailScreen = ({navigation,route}) =>{
    const house = route.params;
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
                <Icon name="favorite" size={20} color={COLORS.white} />
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
           <Text style={style.facilityTextDetails}>2 betroom</Text>
         </View>
         <View style={style.facilityDetails}>
         <View style={style.headerBtn2}>
           <Icon name="bathtub" color={COLORS.white} size={15} />
           </View>
           <Text style={style.facilityTextDetails}>4 Bathroom</Text>
         </View>
       </View>
</View>
          </ImageBackground>  
          <View style={{marginTop:10}}>
            <Text style={{fontSize:16 , fontWeight:500,  color:COLORS.dark}} >Description</Text>
            <Text style={{fontSize:12 , fontWeight:400, color:COLORS.grey}} >The 3 level house that has a modern design, has a large pool and a garage that fits up to four cars... <Text style={{color:COLORS.blue}}>Show More</Text> </Text>
         
            <View style={style.header1}>
              <View style={{ flex:1,   flexDirection: 'row' , gap:10 ,alignItems:'center'}} >
              <Image  style={{width:50 , height:50 ,borderRadius:50}} source={require('../../assets/person.jpg')} />
                <View>
                  <Text style={{fontSize:16 , fontWeight:500,  color:COLORS.dark}} >Garry Allen</Text>
                  <Text style={{fontSize:12 , fontWeight:400, color:COLORS.grey}}>Owner</Text>
                  
                </View>
              </View >
              <View style={style.headerBtn12}>
                <Icon name="phone" size={20} color={COLORS.white} />
              </View>
              <View style={style.headerBtn12}>
                <Icon name="message" size={20} color={COLORS.white} />
              </View>
            </View> 
          {/* glalery */}
          <View>
          <Text style={{fontSize:16 , marginTop:-12, fontWeight:500, color:COLORS.dark}} >Gallery</Text>
     
           {/* <FileList /> */}
           <FlatList
            
            horizontal
            showsHorizontalScrollIndicator={false}
            // keyExtractor={(_, key) => key.toString()}r
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