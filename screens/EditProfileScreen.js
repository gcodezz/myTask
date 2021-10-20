import React, { useState, useEffect } from 'react'
import { 
    View, 
    ScrollView, 
    Button, 
    Modal,
    Text, 
    TouchableOpacity,
    Alert,
    Dimensions,
    StyleSheet 
} from 'react-native'
import { RadioButton } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'

import Colors from '../constants/Colors'
import Description from '../components/Description'
import { useCallback } from 'react/cjs/react.development'

var { width, height } = Dimensions.get('window')

const EditProfileScreen = props => {

    const latestStatus = props.navigation.getParam('status') == undefined ? 'Dating and Friends' : props.navigation.getParam('status')

    const [value, setValue] = useState(latestStatus)
    const [status, setStatus] = useState(latestStatus)
    const [modalVisible, setModalVisible] = useState(false)

    const overlay = modalVisible && styles.overlay

    const showModal = () => {
        setModalVisible(true)
    }

    const submitHandler = useCallback(() => {
        props.navigation.navigate('Profile', {
            status: status
        })
    }, [status])
    
    useEffect(() => {
        props.navigation.setParams({ submit: submitHandler })
    }, [submitHandler])

    return (
        <ScrollView style={{
            ...styles.container,
            ...overlay
        }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Choose Mode</Text>
                            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                                <RadioButton.Item 
                                    label="Dating and Friends" 
                                    value="Dating and Friends" 
                                    labelStyle={styles.radioText}
                                />
                                <RadioButton.Item 
                                    label="Only Friends" 
                                    value="Only Friends" 
                                    labelStyle={styles.radioText} 
                                />
                            </RadioButton.Group>
                            <View style={{ borderBottomWidth: 1, width: width * 0.75 }}></View>
                            <View style={{ flexDirection: 'row', padding: 15 }}>
                                <View style={{ paddingRight: 50 }}>
                                    <Button
                                        onPress={() => {
                                            setModalVisible(false)
                                        }}
                                        title="Cancel"
                                        color="#841584"
                                    />
                                </View>
                                <View style={{ paddingLeft: 50 }}>
                                    <Button
                                        onPress={() => {
                                            setStatus(value)
                                            setModalVisible(false)
                                        }}
                                        title="Select"
                                        color="#841584"
                                    />
                                </View>
                            </View>
                    </View>
                </View>
            </Modal>
            <View style={{ marginHorizontal: 10 }}>
                <Description
                    editable 
                    description='ImageUrl:' 
                    details='A_fine_man.jpg' 
                />
                <View style={{ marginBottom: 20 }} />
                <Description
                    editable 
                    description='Most adventurous experience:' 
                    details='My friend and I got stranded in a blizzard when our SUV froze in Iceland!' 
                />
                <View style={{ marginBottom: 20 }} />
                <Description
                    editable
                    description='Top wishes:' 
                    details='Take a year off to explore the world. Have a family. Create a better life for people around me' 
                />
                <View style={{ marginBottom: 20 }} />
                <Description 
                    editable
                    description='My values:' 
                    details='Kindness, family, healthy living and education.' 
                />
                <View style={{ marginBottom: 20 }} />
                <Description 
                    editable
                    description='My hobbies:' 
                    details='Scuba diving and international cuisine.' 
                />
                <View style={{ marginBottom: 20 }} />
                <Description 
                    editable
                    description='Instagram (only shown to your adventure matches):' 
                    details='@taigeair' 
                />
                <View style={{ marginBottom: 20 }} />
                <View style={styles.section}>
                    <Text style={{
                        ...styles.textDescription,
                        color: 'green'
                    }}>Fairytrail Mode (tell others know you're not open to dating)
                    </Text>
                    <TouchableOpacity
                        onPress={showModal}
                    >
                        <View style={{ borderBottomWidth: 1, marginTop: 10 }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textDetails}>{status}</Text>
                                <AntDesign name="caretdown" size={20} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                </View>
                <View style={{ marginTop: 22 }}/>
            </View>
        </ScrollView>
    )
}

EditProfileScreen.navigationOptions = navData => {
    const submitFn = navData.navigation.getParam('submit')
    return {
        headerTitle: () => (
            <Text style={{ 
                fontSize: 20, 
                fontFamily: 'KarlaMedium', 
                color: Colors.headerTitleColor  
            }}>My Profile</Text>
        ),
        headerRight: () => (
            <Button
                title="Save"
                color={Colors.headerButtonColor}
                onPress={submitFn}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    textDescription: {
        fontFamily: 'KarlaMedium',
        fontSize: 20,
        paddingBottom: 5
    },
    textDetails: {
        fontFamily: 'KarlaLight',
        fontSize: 20
    },
    section: {
        marginTop: 22
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        width: width * 0.8,
        backgroundColor: "white",
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
        fontFamily: 'KarlaBold'
    },
    overlay: {
        flex: 1,
        opacity: 0.5,
        backgroundColor: '#808080',
        width: width,
        height: height
    },
    radioText: {
        fontSize: 20,
        fontFamily: 'KarlaLight'
    }
})

export default EditProfileScreen
