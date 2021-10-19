import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const description = ({ editable, description, details }) => {
    return (
        <View style={styles.section}>
            <Text style={{
                ...styles.textDescription,
                color: editable && 'green'
            }}>{description}</Text>
            <Text style={styles.textDetails}>{details}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        marginTop: 22
    },
    textDescription: {
        fontFamily: 'KarlaMedium',
        fontSize: 20,
        paddingBottom: 5
    },
    textDetails: {
        fontFamily: 'KarlaLight',
        fontSize: 20
    }
})

export default description
