import { BUY_PHONE, BUY_RANDOM_PHONE } from "./phoneType"

const initialState = {
    countOfPhone: 30,
}

export const reducerPhone = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PHONE : 
            return{
                ...state,
                countOfPhone: state.countOfPhone -1
            }
        
        case BUY_RANDOM_PHONE: 
            return{
                ...state,
                countOfPhone: state.countOfPhone + +action.payloud 
            }
        default: return state;
    }
}