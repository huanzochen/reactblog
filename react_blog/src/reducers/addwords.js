import { ADD_WORD } from '../actions'

const addwords = (state = [], action) => {
    switch (action.type) {
        case ADD_WORD:
            return [
                ...state,
                {
                    text: action.text
                }
            ]
        default:
            return state
    }
}


export default addwords