import { BUY_BOOK, BUY_RANDOM_BOOK } from "./bookType"

export const byBook = () => {
    return{
        type:BUY_BOOK,
    }
}

export const byBooks = (count) => {
    return{
        type: BUY_RANDOM_BOOK,
        payloud: count,
    }
}