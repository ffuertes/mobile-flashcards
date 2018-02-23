import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'FlashCards:decks';

export const getDecks = () => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then( results => { 
            return results === null 
                ? setDummyData()
                : JSON.parse( results ) 
        });
}

export const saveDeckTitle = name => {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [name]: {
            title: name,
            questions: [],
        }
    }))
}

export const addCardToDeck = (deck, question, answer) => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) => {
            const decks = JSON.parse(results)
            decks[deck].questions.push({
                question,
                answer,
            });
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
        });
}

function setDummyData() {
    return {
        React: {
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
        JavaScript: {
          title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
    }
}