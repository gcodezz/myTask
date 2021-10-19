import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import EditProfileScreen from './screens/EditProfileScreen'
import ProfileScreen from './screens/ProfileScreen'

import Colors from './constants/Colors';

const defaultStackNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const appNavigator = createStackNavigator({
    Profile: {
        screen: ProfileScreen
    },
    EditProfile: {
        screen: EditProfileScreen
    }
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

export default createAppContainer(appNavigator)