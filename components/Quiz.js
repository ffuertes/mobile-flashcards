import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { red, green, black, white } from '../utils/colors';

import Question from './Question';
import Answer from './Answer';
import Result from './Result';

import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class Deck extends Component {
    state = {
        questionIndex: 0,
        correctAnswers: 0,
        finished: false,
        answer: false,
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: `${ navigation.state.params.title } Quiz`
        }
    }

    updateQuestionIndex = () => {
        const questionsLength = this.props.deck.questions.length;

        if ( this.state.questionIndex < questionsLength - 1 ) {
            this.setState( prevState => {
                return {
                    answer: false,
                    questionIndex: prevState.questionIndex + 1 
                }
            });
        } else {
            this.setState({
                finished: true
            });
            clearLocalNotification()
                .then(setLocalNotification)
        }
    }

    onPressCorrect = () => {
        this.setState( prevState => {
            return {
                correctAnswers: prevState.correctAnswers + 1 
            }
        });

        this.updateQuestionIndex();
    }

    repeat = () => {
        this.setState( {
            questionIndex: 0,
            correctAnswers: 0,
            finished: false,
            answer: false,
        });
    }

    flip = () => {
        this.setState( prevState => {
            return {
                answer: !prevState.answer
            }
        });
    }
    
    render() {
        const { deck, navigation } = this.props;
        const { questionIndex, finished, correctAnswers, answer } = this.state;

        if ( finished ) {
            return (
                <Result 
                    finalScore={ ( 100 / deck.questions.length ) * correctAnswers } 
                    repeat={ this.repeat }
                />
            )
        }
        
        return (
            <View style={styles.container}>
                <View>
                    <Text>{ questionIndex + 1 } of { deck.questions.length } questions</Text>
                </View>

                { answer ? (
                    <Answer flip={this.flip} text={deck.questions[ questionIndex ].answer} />
                ) : (
                    <Question flip={this.flip} text={deck.questions[ questionIndex ].question} />
                )}

                <View style={styles.deckActions}>
                    <TouchableOpacity onPress={ this.onPressCorrect } style={styles.correct}>
                        <Text style={[styles.whiteText, {textAlign:'center'}]}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ this.updateQuestionIndex } style={styles.incorrect}>
                        <Text style={[styles.whiteText, {textAlign:'center'}]}>Incorrect</Text>
                    </TouchableOpacity>
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
    cardsCount: {
        fontSize: 24,
        color: '#999',
        textAlign: 'center',
    },
    correct: {
        borderRadius: 5,
        backgroundColor: green,
        padding: 15,
        paddingLeft: 45,
        paddingRight: 45,
        marginBottom: 15,
    },
    incorrect: {
        borderRadius: 5,
        backgroundColor: red,
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