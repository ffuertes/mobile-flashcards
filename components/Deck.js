import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Feather } from '@expo/vector-icons';

const TopButton = ( {onPressButton} ) => {
    return (
        <TouchableOpacity onPress={ () => onPressButton( 'Home' ) } >
            <View style={{paddingLeft: 10, paddingTop: 5}}>
                <Feather name='arrow-left' size={25} color='#ffffff' />
            </View>
        </TouchableOpacity>
    )
}

class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.title,
            headerLeft: <TopButton onPressButton={ navigation.navigate } />
        }
    }
    render() {
        const { deck, navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.deckInfo}>
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text style={styles.cardsCount}>{ deck.questions.length === 1 ? `${deck.questions.length} card` : `${deck.questions.length} cards` }</Text>
                </View>
                <View style={styles.deckActions}>
                    <TouchableOpacity onPress={ () => navigation.navigate( 'AddCard', { title: deck.title } )} style={styles.button1}>
                        <Text style={{textAlign:'center'}}>Add Card</Text>
                    </TouchableOpacity>

                    { deck.questions.length > 0 && (
                        <TouchableOpacity onPress={ () => navigation.navigate( 'Quiz', { title: deck.title } )} style={styles.button2}>
                            <Text style={[styles.whiteText, {textAlign:'center'}]}>Start Quiz</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deckInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    deckActions: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
    },
    cardsCount: {
        fontSize: 24,
        color: '#999',
        textAlign: 'center',
    },
    button1: {
        borderColor: '#1a1a1a',
        borderRadius: 5,
        borderWidth: 1,
        padding: 15,
        paddingLeft: 45,
        paddingRight: 45,
        marginBottom: 15,
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
    },
    whiteText: {
        color: '#fff',
    }
});

function mapStateToProps( decks, ownProps ) {
    return {
        deck: decks[ownProps.navigation.state.params.title],
    }
}

export default connect(mapStateToProps)(Deck);