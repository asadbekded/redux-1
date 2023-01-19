import { BUY_PHONE, BUY_RANDOM_PHONE } from "./phoneType"


export const buyPhone = () => {
    return{
        type: BUY_PHONE
    }
}

export const buyPhones = (count) => {
    return{
        type: BUY_RANDOM_PHONE,
        payloud: count,
    }
}