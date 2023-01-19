import { BUY_BOOK, BUY_RANDOM_BOOK } from "./bookType";


const initialState = {
    countOfBook: 40,
};

export const reducerBook = (state = initialState, action) => {
    switch(action.type) {
        case BUY_BOOK : 
            return {
                ...state,
                countOfBook: state.countOfBook - 1,
            } 
        
        case BUY_RANDOM_BOOK : 
            return {
                ...state,
                countOfBook: state.countOfBook +  +action.payloud,
            } 

        default: return state;
    }
};