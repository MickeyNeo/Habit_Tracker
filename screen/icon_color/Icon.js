import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 
const Icons = ({type, ...props}) => {
  const getIcon = type => {
        switch (type) {
            case 'Fontisto':
                return Fontisto
            case 'MaterialIcons':
                return MaterialIcons;
            case 'EvilIcon':
                return EvilIcon;
            case 'feather':
                return Feather;
            case 'ant':
                return AntDesign;
            case 'simpleLine':
                return SimpleLineIcon;
            case 'zocial':
                return ZocialIcon;
            case 'simpleLine':
                return SimpleLineIcon;
            case 'foundation':
                return FoundationIcon;
            case 'FontAwesome5':
                return FontAwesome5;
            case 'fa':
                return FAIcon;
            case 'Ionicons':
                return Ionicons;
            case 'MaterialCommunityIcons':
                return MaterialCommunityIcons;
            case 'entypo':
                return EntypoIcon;
            case 'octicon':
                return OcticonIcon;
            default:
                return FontAwesome;
        }
};
const FontIcon = getIcon(type);
    return <FontIcon {...props} />;
};
export default Icons;