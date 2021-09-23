import React from 'react';

import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import Icon7 from 'react-native-vector-icons/Ionicons';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon6 from 'react-native-vector-icons/Entypo';
import Icon8 from 'react-native-vector-icons/MaterialCommunityIcons';


import { Separator, Text, Toast, View } from 'native-base';

import Icon2 from 'react-native-vector-icons/Octicons';
import BaseColor from '../../Core/BaseTheme';




function DrawerContent(props: any) {

    return (

        <DrawerContentScrollView {...props} style={{ backgroundColor: BaseColor.HeaderColor }}>
            <DrawerItemList {...props} />

         
        </DrawerContentScrollView>

    );
}

export default DrawerContent;

