import React, { Component } from 'react';
import { Container, Header, Content, H1, H2, H3, Text,Thumbnail } from 'native-base';
import BaseColor from '../Core/BaseTheme';
import { bindActionCreators } from 'redux';
import  { connect } from 'react-redux';

import { requestApiData} from '../actions';
import { ImageBackground, } from 'react-native';
import { dispatch } from 'jest-circus/build/state';
import createSagaMiddleware from 'redux-saga';
import allReducers  from '../reducers';
import mySaga from '../sagas';
import data from '../reducers/data';
import {fetchData} from '../api';

// create the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// // mount it on the Store
// const store = createStore(
//     allReducers,
//   applyMiddleware(sagaMiddleware)
// )

// then run the saga


   class ShowWeatherPage extends Component {
 
    componentDidMount() {
       this.props.requestApiData();
      }
    
  render() {
    const {result={}}  =this.props.data;
      
    console.log("Hello",this.props.data);
    var cityName=this.props.data?.name;
    var Current=this.props.data?.main?.temp;
     var weatherType=this.props.data?.weather[0].main;
    var max=this.props.data?.main?.temp_max;
    var min=this.props.data?.main?.temp_min;
    // console.log("Hii",cityName);
    return (
      <Container>
        
       <ImageBackground
          source={require('../Assets/sky.png')}
          style={ { flex: 1,
            width: '100%',
            height: '100%',
             resizeMode: 'cover',}}>
        <Content>
      
       <Text style={{justifyContent: 'center',alignSelf:'center',marginTop:'30%',fontSize: 22,color: BaseColor.ColorWhite}}>{cityName} weather</Text>
       <Text style={{justifyContent: 'center',alignSelf:'center',fontSize: 32,color: BaseColor.ColorWhite}}>{(Current-273.15).toFixed(0)+'\u00b0'}</Text>
       <Text style={{justifyContent: 'center',alignSelf:'center',fontSize: 19,color: BaseColor.ColorWhite}}>{weatherType}</Text>
       
       <Text style={{justifyContent: 'center',alignSelf:'center',fontSize: 22,color: BaseColor.ColorWhite}}>{'H:'+(max-273.15).toFixed(0)+'\u00b0'}{'   '}{'L:'+(min-273.15).toFixed(0)+'\u00b0'}</Text>
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}
const mapStatetoProps=state=>( {data:state.data})
const mapDispatchtoProps=dispatch=>bindActionCreators({requestApiData},dispatch);
export default connect(mapStatetoProps,mapDispatchtoProps)(ShowWeatherPage);
