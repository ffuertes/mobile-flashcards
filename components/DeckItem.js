import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'

const DeckItem = ({deck, navigation}) => {
    return (
        <View style={{width: '100%'}}>
            <TouchableOpacity style={styles.item} onPress={ () => navigation.navigate( 'Deck', { title: deck.title } ) }>
                <Text style={styles.title}>{deck.title}</Text>        
                <Text style={styles.quantity}>{ deck.questions.length === 1 ? `${deck.questions.length} card` : `${deck.questions.length} cards` }</Text>        
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        paddingTop: 25,
        paddingBottom: 25,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 15,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
    },
    quantity: {
        textAlign: 'center',
    }
});

export default withNavigation(DeckItem);
