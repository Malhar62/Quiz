import {
    NEXT,
    BACK,
    ADD,
    EDIT,
    SUBMIT,
    DONE,
    CLEAR
  } from "../../Constants/index";
  
  export const next = (obj) => ({
    type: NEXT,
    obj
  });
  export const back = (num) => ({
    type: BACK,
    num
  });
  export const edit = (obj) => ({
    type: EDIT,
    obj
  });
  export const submit = () => ({ type: SUBMIT });
  
  export const add = (obj) => ({
    type: ADD,
    obj
  });
  export const showResult = () => ({
    type: DONE
  });
  export const clear = (num) => ({
    type: CLEAR,
    num
  });
  