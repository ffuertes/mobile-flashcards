import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { saveDeckTitle } from '../utils/api';

import { KeyboardAvoidingView, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

class AddDeck extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Add New Deck'
        }
    }

    state = {
        name: '',
    }

    render() {
        const { newDeck } = this.props; 
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput
                    style={ styles.field }
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />
                <TouchableOpacity onPress={ () => newDeck( this.state.name ) }>
                    <Text style={styles.button}>Create Deck</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        padding: 10,
    },
    field: {
        height: 55, 
        padding: 10,
        fontSize: 20,
        borderColor: 'gray', 
        width: '100%',
        marginBottom: 20,
        marginTop: 20,
    },
    button: {
        borderWidth: 1,
        borderColor: '#1a1a1a',
        borderRadius: 5,
        backgroundColor: '#1a1a1a',
        padding: 15,
        paddingLeft: 45,
        paddingRight: 45,
        marginTop: 15,
        color: '#fff',
    }
});

function mapDispatchToProps( dispatch, {navigation} ) {
    return {
        newDeck: name => { 

            if ( name === '' ) {
                alert( 'Please Enter a Name');
                return;
            }

            dispatch( addDeck( name ) ); 
            saveDeckTitle(name);
            navigation.navigate( 'Deck', { title: name } );
        },
    }
}

export default connect(null, mapDispatchToProps)(AddDeck);

