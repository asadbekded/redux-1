import { combineReducers } from "redux";
import { reducerBook } from "./book/bookReducer";
import { reducerPhone } from "./phone/phoneReducer";

export const rootReducer = combineReducers({
    book: reducerBook,
    phone: reducerPhone,
});