import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import { addCardToDeck } from '../utils/api';

import { KeyboardAvoidingView, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

class AddCard extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'New Card'
        }
    }

    state = {
        question: '',
        answer: '',
    }

    addNewCard = ( deck, question, answer ) => {
        const { newCard, navigation } = this.props;

        newCard( deck, question, answer );

        this.setState({
            question: '',
            answer: '',
        });

        navigation.navigate( 'Deck', { title: deck } );
    }

    render() {
        const { navigation } = this.props;
        const { question, answer } = this.state; 
        const { title } = navigation.state.params; 

        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <Text style={styles.title}>Question:</Text>
                <TextInput
                    style={ styles.field }
                    autoGrow={true}
                    multiline={true}
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                    />

                <Text style={styles.title}>Answer:</Text>
                <TextInput
                    multiline={true}
                    autoGrow={true}
                    style={ styles.field }
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
                />
                <TouchableOpacity onPress={ () => this.addNewCard( title, question, answer ) }>
                    <Text style={styles.button}>Add Card</Text>
                </TouchableOpacity>

                <View style={{ height: 80 }} />
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
        newCard: ( deck, question, answer ) => { 

            if ( question === '' ) {
                alert( 'Please enter a question!');
                return;
            }

            dispatch( addCard( deck, question, answer ) ); 
            addCardToDeck( deck, question, answer );
        },
    }
}

export default connect(null, mapDispatchToProps)(AddCard);

