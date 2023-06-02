import { Platform } from 'react-native';

import colors from '../assets/colors';

export default {
    text:{
        color:colors.black,
        fontSize:18,
        fontFamily: Platform.OS === 'android' ? 'monospace': 'Avenir'
    },
}