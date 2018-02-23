import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Result = ({ finalScore, repeat, navigation }) => {
    return (
        <View style={styles.container}>
            <Text >Final Score</Text>
            <Text style={ styles.title }>{ Math.ceil( finalScore ) }%</Text>
            <TouchableOpacity onPress={ repeat }>
                <Text style={styles.button}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => navigation.goBack() }>
                <Text style={styles.button2}>Back to Deck</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 60,
        padding: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        borderColor: '#1a1a1a',
        borderRadius: 5,
        borderWidth: 1,
        padding: 15,
        paddingLeft: 45,
        paddingRight: 45,
        marginBottom: 15,
        textAlign: 'center',
    },
    button2: {
        borderWidth: 1,
        borderColor: '#1a1a1a',
        borderRadius: 5,
        backgroundColor: '#1a1a1a',
        padding: 15,
        paddingLeft: 45,
        paddingRight: 45,
        marginBottom: 15,
        color: '#fff',
    }
});

export default withNavigation( Result );