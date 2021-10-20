import { Platform } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
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

const EditNavigator = createStackNavigator({
    EditProfile: {
        screen: EditProfileScreen
    }
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const ProfileNavigator = createStackNavigator({
    Profile: {
        screen: ProfileScreen
    }
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const appNavigator = createSwitchNavigator({
    Edit: EditNavigator,
    Profilee: ProfileNavigator
})

export default createAppContainer(appNavigator)