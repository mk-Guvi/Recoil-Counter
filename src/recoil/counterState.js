import { atom, selector } from "recoil"; //this atom component creates a single shared entity

export const counterState = atom({
  key: "counterState", //key should be unique
  default: 0
});

//selectors are basically getters,
//their value is getting the value in different format.
//eg:to get the double value of counterState as seperatae count we can use the selctors

export const counterDoubleSelector = selector({
  key: "counterDoubleSelector",
  //we are using getter method,
  //you need to destructure getter here
  get: ({ get }) => {
    return get(counterState) * 2;
  }
});
