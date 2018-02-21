import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';

import DeckItem from './DeckItem';

class DeckList extends Component {
    render() {
        const { decks } = this.props;
        return (
            <View style={styles.container}>
                { Object.keys(decks).map( name => <DeckItem key={name} deck={decks[name]} /> ) }
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
});

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect( mapStateToProps )( DeckList );
