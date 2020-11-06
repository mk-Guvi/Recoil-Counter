import {atom} from "recoil"//this atom component creates a single shared entity

export const counterState=atom({
    key:"counterState",//key should be unique
    default: 0  
})