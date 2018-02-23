export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';

export const addDeck = ( name ) => {
    return {
        type: ADD_DECK,
        name
    }
}

export const addCard = ( deck, question, answer ) => {
    return {
        type: ADD_CARD,
        deck,
        question,
        answer
    }
}

export const receiveDecks = ( decks ) => {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}