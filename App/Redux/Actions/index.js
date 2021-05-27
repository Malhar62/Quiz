import {
  NEXT,
  BACK,
  ADD,
  EDIT,
  SUBMIT,
  DONE,
  CLEAR, SAVE, CHANGE
} from "../../Constants/index";

export const save = (obj) => ({
  type: SAVE,
  obj
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
export const change = (num) => ({
  type: CHANGE, num
})
