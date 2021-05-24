import {
    NEXT,
    BACK,
    ADD,
    EDIT,
    SUBMIT,
    DONE,
    CLEAR
  } from "../../Constants/index";
  import {
    PeopleArray,
    Maths,
    Science,
    Social,
    English,
    Computer
  } from "../../datalist/index";
  
  const initState = {
    MainSub: "",
    list: PeopleArray,
    count: 0,
    realAns: "",
    answers: [{}, {}, {}, {}, {}, {}, {}],
    finalR: 0,
    scoreList: [],
    extraData: [],
    subName: "",
    ticked: 0,
    current: ["", "", "", "", "", "", ""]
  };
  
  export default function quiz(state = initState, action) {
    switch (action.type) {
      case NEXT:
        //action.obj.result   action.obj.op.que   action.obj.selected
        let close = {
          id: action.obj.op.id,
          que: action.obj.op.que,
          ans: action.obj.selected,
          options: [
            {
              number: "1",
              value: "Jack Sparrow",
              status: action.obj.op.options[0].status
            },
            {
              number: "2",
              value: "Daniel Roberts",
              status: action.obj.op.options[0].status
            },
            {
              number: "3",
              value: "Daniel Roberts",
              status: action.obj.op.options[0].status
            }
          ]
        };
        /*if (close.ans !== "") {
          ink++;
        }*/
        let amp = [...state.current];
        let str = action.obj.selected;
        amp.splice(action.obj.result, 1, str);
        state.current = amp;
        let cartier = [...state.answers];
        cartier.splice(action.obj.result, 1, close);
        state.answers = cartier;
        return {
          ...state,
          count: action.num,
          answers: state.answers,
          current: state.current
        };
  
      case BACK:
        return {
          ...state,
          count: action.num
        };
      case EDIT:
        let open = {
          id: state.list[action.obj.result].id,
          que: state.list[action.obj.result].que,
          ans: state.list[action.obj.result].ans,
          options: [
            {
              number: "1",
              value: state.list[action.obj.result].options[0].value,
              status:
                state.list[action.obj.result].options[0].number ===
                action.obj.valve
                  ? "checked"
                  : "unchecked"
            },
            {
              number: "2",
              value: state.list[action.obj.result].options[1].value,
              status:
                state.list[action.obj.result].options[1].number ===
                action.obj.valve
                  ? "checked"
                  : "unchecked"
            },
            {
              number: "3",
              value: state.list[action.obj.result].options[2].value,
              status:
                state.list[action.obj.result].options[2].number ===
                action.obj.valve
                  ? "checked"
                  : "unchecked"
            }
          ]
        };
        let dukati = [...state.list];
        dukati.splice(action.obj.result, 1, open);
        state.list = dukati;
        return {
          ...state,
          list: state.list,
          realAns: action.obj.valve
        };
      case DONE:
        let king = state.finalR;
        if (state.answers.length === state.list.length) {
          for (var i = 0; i < state.list.length; i++) {
            if (state.list[i].ans === state.answers[i].ans) {
              king++;
            }
          }
          state.finalR = king;
        }
  
        return {
          ...state,
          finalR: state.finalR,
          extraData: [],
          scoreList: [
            ...state.scoreList,
            {
              marks: state.finalR,
              name: state.subName
            }
          ]
        };
      case SUBMIT:
        var ink = state.ticked;
        let demo = [...state.current];
        for (var x = 0; x < state.current.length; x++) {
          if (demo[x] !== "") {
            ink++;
            console.log("-> " + ink);
          }
        }
        state.ticked = ink;
        return {
          ...state,
          ticked: state.ticked
        };
      case CLEAR:
        let extraArray = [...state.list];
        let extraArray1 = [...state.extraData];
        extraArray.splice(action.num, 1, extraArray1[action.num]);
        state.list = extraArray;
  
        return {
          ...state,
          list: state.list
        };
      case ADD:
        let taken = [...action.obj.queen];
        state.list = taken;
        state.extraData = taken;
        return {
          ...state,
          subName: action.obj.name,
          finalR: 0,
          extraData: state.extraData,
          list: state.list,
          ticked: 0
        };
      default:
        return state;
    }
  }
  