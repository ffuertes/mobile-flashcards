import { ADD_DECK, ADD_CARD, RECEIVE_DECKS } from '../actions';

function decks( state = {}, action ) {
    switch (action.type) { 
        case RECEIVE_DECKS :
          const decks = action.decks;
          return { ...decks };
        case ADD_DECK :
          if ( action.name in state ) {
            return state;
          }
          return {
            ...state,
            [action.name]: {
              title: action.name,
              questions: [],
            }
          }   
        case ADD_CARD :
          return {
            ...state,
            [action.deck]: {
              title: state[action.deck].title,
              questions: [
                ...state[action.deck].questions,
                {
                  question: action.question,
                  answer: action.answer
                }
              ]
            }
          } 
        default:
            return state;
    }
    
}

export default decks;