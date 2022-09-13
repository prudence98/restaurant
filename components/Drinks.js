import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropShadow from "react-native-drop-shadow";
import DrinksData from '../assets/data/Drinks';
import colors from '../assets/colors/colors';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
export default  function Drinks ({ navigation }){
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
    return (
      <View style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}>
             <Provider >
            <View style={styles.HeaderDetails}>
           

         <Text style={styles.popularTitle}>Drinks</Text> 
         <View style={styles.headerMenu}>
         <View style={{
            
            alignSelf: 'flex-end',
          }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<TouchableOpacity onPress={openMenu}
          style={{
            width: 30,
            alignSelf: 'flex-end',
            flex: 1,
            color: colors.textDark,
          }}
          ><Feather
          name="align-right"
          size={30}
          style={styles.menuIcon}
          /> </TouchableOpacity>}>
          <Menu.Item onPress={() => { navigation.navigate('Meals')}} title="Meals"  />
          <Divider />
          <Menu.Item onPress={() => { navigation.navigate('Dessert')}} title="Dessert" />
          <Divider />
          <Menu.Item onPress={() => { navigation.navigate('Drinks')}} title="Drinks" />
          <Divider />
          <Menu.Item onPress={() => { navigation.navigate('SignIn')}} title="SignIn" />
          <Divider />
          <Menu.Item onPress={() => { navigation.navigate('SignUp')}} title="Register" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Cart" />
          <Divider />
          <Menu.Item onPress={() => {}} title="My Account" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Signout" />
          
        </Menu>
      </View>
         </View>
           
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={12} color={colors.textDark}  style={styles.featheeBack}></Feather>
            </View>
          </TouchableOpacity>
          </View>
       
  
          {/* Titles */}
        
       
  
          {/* Popular */}
          <View style={styles.popularWrapper}>
         
            {DrinksData.map((item) => (
              <DropShadow
              style={{
               shadowColor: "#000",
               shadowOffset: {
               width: 0,
               height: 0,
                 },
               shadowOpacity: 0.3,
               shadowRadius: 10,
               }}
                   >
            <TouchableOpacity
            key={item.id}
            onPress={() =>
              
              navigation.navigate('Details', {
                item: item,
              })
            }>
                <View
                   style={[
                    styles.popularCardWrapper,
                    {
                      marginTop: item.id == 1 ? 10 : 20,
                    },
                  ]}>
                  <View>
                    <View>
                      <View style={styles.popularTopWrapper}>
                      <MaterialCommunityIcons
                          name="crown"
                          size={12}
                          color="gold"
                        />
                        <Text style={styles.popularTopText}> {item.sizeName}</Text>
                      </View>
                      <View style={styles.popularTitlesWrapper}>
                        <Text style={styles.popularTitlesTitle}>
                          {item.title}
                        </Text>
                        <Text style={styles.popularTitlesWeight}>
                          Weight {item.weight}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.popularCardBottom}>
                      <View style={styles.addPizzaButton}>
                       <Text style={styles.text}>Details</Text>
                      </View>
                      <View style={styles.ratingWrapper}>
                      
                        <Text>Price : {item.price}</Text>
                      </View>
                    </View>
                  </View>
  
                  <View style={styles.popularCardRight}>
                    <Image source={item.image} style={styles.popularCardImage} />
                  </View>
                </View>
                </TouchableOpacity>
                </DropShadow>
            ))}
          </View>
          </Provider>
          </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 20,
      alignItems: 'center',
    },
    featheeBack:{
            fontSize:35
    },
    headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        width:40,
        
        borderRadius: 10,
        marginTop: -35,
      },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 40,
    },
    titlesWrapper: {
      marginTop: 30,
      paddingHorizontal: 20,
    },
    titlesSubtitle: {
       fontFamily: 'Montserrat-Regular',
      fontSize: 16,
      color: colors.textDark,
    },
    titlesTitle: {
     fontFamily: 'Montserrat-Bold',
      fontSize: 32,
      color: colors.textDark,
      marginTop: 5,
    },
    searchWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 30,
    },
    search: {
      flex: 1,
      marginLeft: 10,
      borderBottomColor: colors.textLight,
      borderBottomWidth: 2,
    },
    searchText: {
      fontFamily: 'Montserrat-Semibold',
      fontSize: 14,
      marginBottom: 5,
      color: colors.textLight,
    },
    categoriesWrapper: {
      marginTop: 30,
      
    },
    categoriesTitle: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 16,
      paddingHorizontal: 20,
    },
    categoriesListWrapper: {
      paddingTop: 15,
      paddingBottom: 20,
    },
    categoryItemWrapper: {
      backgroundColor: '#F5CA48',
      marginRight: 20,
      borderRadius: 20,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 2,
    },
    categoryItemImage: {
      width: 60,
      height: 60,
      marginTop: 25,
      alignSelf: 'center',
      marginHorizontal: 20,
    },
    categoryItemTitle: {
      textAlign: 'center',
       fontFamily: 'Montserrat-Medium',
      fontSize: 14,
      marginTop: 10,
    },
    categorySelectWrapper: {
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 20,
      width: 26,
      height: 26,
      borderRadius: 26,
      marginBottom: 20,
    },
    categorySelectIcon: {
      alignSelf: 'center',
    },
    menuIcon:{
      alignSelf: 'flex-end',
      marginTop:-30,
    },
    userIcon:{
      marginVertical:-30,
      alignSelf: 'left',

    },
    iconsContainer:{
      flexDirection: '',
      
    },
    popularWrapper: {
      paddingHorizontal: 20,
    },
    popularTitle: {
       fontFamily: 'Montserrat-Bold',
      fontSize: 24,
      fontWeight:700,
      marginLeft: 150
    },
    popularCardWrapper: {
      flex: 1,
      backgroundColor: colors.white,
      borderRadius: 25,
      paddingTop: 20,
      paddingLeft: 20,
      flexDirection: 'row',
      overflow: 'hidden',
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 2,
    },
    popularTopWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    popularTopText: {
      marginLeft: 10,
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 14,
    },
    popularTitlesWrapper: {
      marginTop: 20,
    },
    popularTitlesTitle: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 14,
      color: colors.textDark,
    },
    popularTitlesWeight: {
       fontFamily: 'Montserrat-Medium',
      fontSize: 12,
      color: colors.textLight,
      marginTop: 5,
    },
    popularCardBottom: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      marginLeft: -20,
    },
    addPizzaButton: {
      backgroundColor: colors.primary,
      paddingHorizontal: 5,
      paddingVertical: 10,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      
    },
    ratingWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 20,
    
    },
    rating: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 12,
      color: colors.textDark,
      marginLeft: 5,
    },
    popularCardRight: {
      marginLeft: 40,
    },
    popularCardImage: {
      width: 210,
      height: 125,
      resizeMode: 'contain',
    },
    text:{
       fontFamily: 'Montserrat-SemiBold',
      color: colors.white,
      fontSize:20,
    },
    HeaderDetails:{
        flexDirection: 'reverse-row',
    },
  });
  