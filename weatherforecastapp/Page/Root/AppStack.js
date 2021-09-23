
import React, { Component } from 'react';
import { View, StyleSheet, } from 'react-native';
import {
  Text,
  Icon,
} from 'native-base';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



import EvilIcons from 'react-native-vector-icons/EvilIcons';
import BaseColor from '../../Core/BaseTheme';
import Homepage from '../Homepage';
import ShowWeatherPage from '../ShowWeatherPage';
import DrawerContent from '../Drawer/DrawerContent';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackScreen = ({ navigation }) => (
  <Stack.Navigator initialRouteName="Homepage">
      <Stack.Screen
      name="Homepage"
      component={Homepage}
      options={{headerShown: null, gestureEnabled: false}}
    />
  
    <Stack.Screen
      name="ShowWeatherPage"
      component={ShowWeatherPage}
      options={{headerShown: null, gestureEnabled: false}}
    />
   


  </Stack.Navigator>
);

function AppStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        minSwipeDistance={200}
        openByDefault={false}
        drawerType="back"
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerPosition="left"
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
        }}
        drawerStyle={{ backgroundColor: 'transparent' }}
        initialRouteName="Splash">
        <Drawer.Screen
          name="HomePage"
          component={StackScreen}
          options={{
            drawerLabel: () => {
              return null;
            },
            title: null,
            // drawerIcon: () => {
            //   return <AppIconImage />;

            // },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export const HeaderTittle = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignContent: 'center',
        // alignSelf: 'center',
        marginLeft:'17%'
      }}>
      <Text
        style={{
          color: BaseColor.HeaderColor,
          fontWeight: 'bold',
          alignSelf: 'center',
          fontSize: 20
        }}>
        {props.Title}
      </Text>
      {props.TitleIconRight !== null && (
        <FontAwesome5Icon
          style={{ marginLeft: 10, alignSelf: 'center' }}
          size={20}
          color={BaseColor.ColorWhite}
          name={props.TitleIconRight}></FontAwesome5Icon>
      )}
    </View>
  );
};

const DrawerIcon = (props) => {
  return (
    <EvilIcons
      name="navicon"
      size={40}
      style={{ marginStart: 10 }}
      color={BaseColor.HeaderColor}
      onPress={() => {
        props.navigation.openDrawer();
      }}
    />
  );
};
const SearchIcon = (props) => {
  return (
    <Icon
      name="search"
      style={{ color: BaseColor.ColorWhite }}
      onPress={() => {
        props.navigation.navigate('ShowcaseSearchPage');
      }}
    />
  );
};

const HearderOptions = (props) => {
  var { navigation, Title, ShowLeft, ShowRight, ShowSearch, TitleOnly } = props;

  if (ShowRight === undefined) {
    ShowRight = true;
  }

  if (ShowLeft === undefined) {
    ShowLeft = true;
  }
  if (TitleOnly) {
    ShowLeft = false;
    ShowRight = false;
  }
  if (ShowSearch === undefined) {
    ShowSearch = true;
  }
  return {

    headerTransparent: true,
    headerLeft: () =>
      ShowLeft ? <DrawerIcon navigation={navigation} /> : <></>,
    headerRight: () =>
      ShowRight ? (
        <View style={styles.iconContainer}>
          {ShowSearch && (
            <View style={{ marginRight: 30, alignSelf: 'center' }}>
              <SearchIcon navigation={navigation} />
            </View>
          )}
          <View style={{ alignSelf: 'center', justifyContent: 'center' }}>

          </View>
        </View>
      ) : (
        <></>
      ),
    headerTitle: () => <HeaderTittle {...props} />,
    headerStyle: {
      backgroundColor: BaseColor.HeaderColor,

    },
  };
};
const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AppStack;
