import React, { Component } from 'react';
import { Container, Header, Content, H1, H2, H3, Text,Thumbnail } from 'native-base';
import BaseColor from '../Core/BaseTheme';
import {
    View,
    SafeAreaView,
    StatusBar,
    Modal,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Image,
    TouchableHighlight,
    Switch,
    FlatList,
    Linking,
  } from 'react-native';
  
export default class Homepage extends Component {
  render() {
    return (
      <Container>
       <ImageBackground
          source={require('../Assets/sky.png')}
          style={ { flex: 1,
            width: '100%',
            height: '100%',
             resizeMode: 'cover',}}>
        <Content>
        <TouchableOpacity
                    onPress={() => 
                    this.props.navigation.navigate('ShowWeatherPage')}>
       <Text style={{justifyContent: 'center',alignSelf:'center',marginTop:'50%',fontSize: 22,color: BaseColor.ColorWhite}}>Check weather</Text>
       </TouchableOpacity>
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}