import React, { useEffect, useCallback } from 'react'
import { 
    View, 
    Text,
    ImageBackground,
    Dimensions,
    Button,
    ScrollView,
    StyleSheet
} from 'react-native'

import Description from '../components/Description'
import Colors from '../constants/Colors'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

const ProfileScreen = props => {
    const status = props.navigation.getParam('status')

    const editHandler = useCallback(() => {
        props.navigation.navigate({
            routeName: 'EditProfile',
            params: {
                status: status
            }
        })
    }, [status])

    useEffect(() => {
        props.navigation.setParams({ edit: editHandler })
    }, [editHandler])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.imageWrapper}>
                <ImageBackground
                    imageStyle={{ borderRadius: 10 }}
                    style={{
                        width: windowWidth * 0.9,
                        height: windowHeight * 0.4
                    }}
                    resizeMode='cover'
                    source={require('../assets/images/man.jpg')}
                >
                    <View style={styles.imageTextWrapper}>
                        <Text style={styles.imageText}>Paid</Text>
                    </View>
                </ImageBackground>
            </View>
            
            <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.individual}>Taige, United States, 34</Text>
                <View style={styles.character}>
                    <View>
                        <Text style={{ fontSize: 20, fontFamily: 'KarlaMedium' }}>Character:</Text>
                        <Text style={{ fontSize: 20, fontFamily: 'KarlaMedium', color: Colors.primaryColor, paddingVertical: 5 }}>Aladdin</Text>
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={{ color: Colors.white, padding: 8, fontSize: 18, fontFamily: 'KarlaMedium' }}>{status == undefined ? 'Only Friends' : status}</Text>
                    </View>
                </View>
                <Description 
                    description='Most adventurous experience:' 
                    details='My friend and I got stranded in a blizzard when our SUV froze in Iceland!' 
                />
                <Description
                    description='Top wishes:' 
                    details='Take a year off to explore the world. Have a family. Create a better life for people around me' 
                />
                <Description 
                    description='My values:' 
                    details='Kindness, family, healthy living and education.' 
                />
                <Description 
                    description='My hobbies:' 
                    details='Scuba diving and international cuisine.' 
                />
                <Description 
                    description='Instagram (only shown to your adventure matches):' 
                    details='@taigeair' 
                />
                <View style={{ marginTop: 22 }}/>
            </View>
        </ScrollView>
    )
}

ProfileScreen.navigationOptions = navData => {
    const editFn = navData.navigation.getParam('edit')
    return {
        headerTitle: () => (
            <Text style={{ 
                fontSize: 20, 
                fontFamily: 'KarlaMedium', 
                color: Colors.headerTitleColor 
            }}>Make</Text>
        ),
        headerRight: () => (
            <Button
                onPress={() => alert('This is a button!')}
                title="Edit"
                color="#ff6666"
                onPress={editFn}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    imageWrapper: {
        marginTop: 10,
        alignItems: 'center'
    },
    imageText: {
        fontSize: 20,
        alignSelf: 'flex-start',
        color: Colors.white,
        paddingVertical: 5,
        paddingHorizontal: 20
    },
    imageTextWrapper: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        backgroundColor: Colors.imageTextColor, 
        borderBottomRightRadius: 10
    },
    character: {
        flexDirection: 'row',
        width: windowWidth * 0.9,
        justifyContent: 'space-between'
    },
    individual: {
        fontSize: 22,
        paddingVertical: 20,
        fontFamily: 'KarlaBold'
    },
    textWrapper: {
        backgroundColor: Colors.imageTextColor,
        height: 35,
        borderRadius: 10,
    },
    section: {
        marginVertical: 20
    }
})

export default ProfileScreen