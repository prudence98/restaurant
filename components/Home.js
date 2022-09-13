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
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
import DropShadow from "react-native-drop-shadow";
import { Button, Menu, Divider, Provider } from 'react-native-paper';

//import { color, round } from 'react-native-reanimated';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default  function Home ({ navigation }){
  //menu variables
const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);


  const renderCategoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
          
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}>
             <TouchableOpacity
          key={item.id}
          onPress={() =>{
            if(item.id == 1){
            navigation.navigate('Meals', {
              item: item,
            });
          }else if(item.id == 2){
            navigation.navigate('Dessert', {
              item: item,
            });
          }else if(item.id == 3){
            navigation.navigate('Drinks', {
              item: item,
            });
          }
                      }

          }>
        <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? colors.black : colors.white}
          /> 
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        
        showsVerticalScrollIndicator={false}>
        
           <Provider >
      <View style={{
            
            alignSelf: 'flex-end'
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
    
         <TouchableOpacity
         style={{
          width: 10,
         
        }}
         onPress={() =>
           navigation.navigate('SignUp')
          
         }> 
        <Feather
            name="user"
            size={30}
            style={styles.userIcon}
            />
     </TouchableOpacity>
     

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Welcome to</Text>
          <Text style={styles.titlesTitle}>Skhaftini</Text>
        </View>

        {/* Search */}
        <View style={styles.searchWrapper}>
          
          <View style={styles.search}>
            <TextInput 
            style={styles.searchText}
            placeholder="Search"></TextInput>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/* Popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          {popularData.map((item) => (
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
    fontSize: 16,
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
  }
});
