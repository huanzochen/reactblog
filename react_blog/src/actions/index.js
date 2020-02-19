/*
* action type
*/

export const ADD_WORD = 'ADD_WORD';



/*
* action creator
*/

export const addWord = (text) => {
    return {
        type: ADD_WORD,
        text: text
    }
}
