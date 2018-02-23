import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Question = ({ text, flip }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{ text }</Text>
            <TouchableOpacity onPress={ flip }>
                <Text style={ styles.button }>View Answer</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 25,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
    },
    button: {
        padding: 15,
        paddingLeft: 45,
        paddingRight: 45,
        marginBottom: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 25,
    }
});

export default Question;