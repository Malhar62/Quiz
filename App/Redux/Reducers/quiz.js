import { NEXT, ADD, EDIT, SUBMIT, DONE, CLEAR } from "../../Constants/index";
import { PeopleArray } from "../../datalist/index";

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
  current: ["", "", "", "", "", "", ""],
  queue: [
    { id: 1, color: "#fff" },
    { id: 2, color: "#fff" },
    { id: 3, color: "#fff" },
    { id: 4, color: "#fff" },
    { id: 5, color: "#fff" },
    { id: 6, color: "#fff" },
    { id: 7, color: "#fff" }
  ],
  extraQ: [
    { id: 1, color: "#fff" },
    { id: 2, color: "#fff" },
    { id: 3, color: "#fff" },
    { id: 4, color: "#fff" },
    { id: 5, color: "#fff" },
    { id: 6, color: "#fff" },
    { id: 7, color: "#fff" }
  ]
};

export default function quiz(state = initState, action) {
  switch (action.type) {
    case NEXT:
      //action.obj.result(index)   action.obj.op.que(object)   action.obj.selected(value)
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
            status: action.obj.op.options[1].status
          },
          {
            number: "3",
            value: "Daniel Roberts",
            status: action.obj.op.options[2].status
          }
        ]
      };
      /*if (close.ans !== "") {
        ink++;
      }*/
      let mick = {
        id: state.queue[action.obj.result].id,
        color: action.obj.selected === "" ? "#fff" : "green"
      };
      let jamal = [...state.queue];
      jamal.splice(action.obj.result, 1, mick);
      state.queue = jamal;
      let amp = [...state.current];
      let str = action.obj.selected;
      amp.splice(action.obj.result, 1, str);
      state.current = amp;
      let cartier = [...state.answers];
      cartier.splice(action.obj.result, 1, close);
      state.answers = cartier;
      console.log(
        action.obj.result + 1 + "." + state.answers[action.obj.result].ans
      );
      return {
        ...state,
        answers: state.answers,
        current: state.current
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
      let newMan = [...state.answers];
      for (var t = 0; t < newMan.length; t++) {
        if (newMan[t].ans === undefined) {
          let opera = {
            id: state.answers[t].id,
            que: state.answers[t].que,
            ans: "",
            options: [
              {
                number: "1",
                value: "",
                status: "unchecked"
              },
              {
                number: "2",
                value: "",
                status: "unchecked"
              },
              {
                number: "3",
                value: "",
                status: "unchecked"
              }
            ]
          };
          newMan.splice(t, 1, opera);
        }
      }
      state.answers = newMan;
      let king = state.finalR;
      if (state.answers.length === state.list.length) {
        for (var i = 0; i < state.list.length; i++) {
          if (state.list[i].ans === state.answers[i].ans) {
            king++;
            console.log("Ans : " + (i + 1));
          }
        }
        state.finalR = king;
      }

      return {
        ...state,
        finalR: state.finalR,
        answers: state.answers,
        ticked: 0,
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
      let boomer = [...state.current];
      boomer.splice(action.num, 1, "");
      state.current = boomer;
      let ansh = [...state.answers];
      ansh.splice(action.num, 1, {});
      state.answers = ansh;
      console.log(state.answers);
      let near = [...state.queue];
      near.splice(action.num, 1, state.extraQ[action.num]);
      state.queue = near;
      return {
        ...state,
        queue: state.queue,
        list: state.list,
        current: state.current,
        answers: state.answers
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
        ticked: 0,
        current: ["", "", "", "", "", "", ""],
        queue: state.extraQ
      };
    default:
      return state;
  }
}
