import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Entypo } from '@expo/vector-icons'

import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

import DeckItem from './DeckItem';

import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions';

class DeckList extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        getDecks()
            .then( decks => {
                dispatch( receiveDecks(decks) )
            });
    }
    
    _keyExtractor = (item, index) => index;

    render() {
        const { decks, navigation } = this.props;
        return (
            <View style={{flex: 1}}>

                <FlatList
                    style={ styles.container }
                    data={Object.keys(decks)}
                    keyExtractor={this._keyExtractor}
                    renderItem={ ({item, index}) => <DeckItem deck={decks[item]} /> }
                />
                
                <TouchableOpacity onPress={ () => navigation.navigate( 'AddDeck' ) } style={styles.addButton} >
                    <View>
                        <Entypo name='plus' size={30} color="#fff" />
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    addButton: {
        position: 'absolute',
        bottom: 25,
        right: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        width: 70,
        height: 70,
        borderRadius: 40,
    },
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    }
});

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect( mapStateToProps )( DeckList );
