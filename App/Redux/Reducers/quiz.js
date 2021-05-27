import { NEXT, ADD, EDIT, SUBMIT, DONE, CLEAR, SAVE, CHANGE } from "../../Constants/index";
import { PeopleArray, Sample } from "../../datalist/index";

const initState = {
  saved: ['no', 'no', 'no', 'no', 'no', 'no', 'no'],
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
  queue: Sample,
  extraQ: Sample,
  solution: ["", "", "", "", "", "", ""],
  choice:['','','','','','','']
};

export default function quiz(state = initState, action) {
  switch (action.type) {
    case SAVE: //SAVE
    //('------------------------------------------------------------------------->'+action.obj.selected)
      //action.obj.result(index)   action.obj.op.que(object)   action.obj.selected(value)
      let close = {
        id: action.obj.op.id,
        que: action.obj.op.que,
        ans: state.choice[action.obj.result],
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
        color: state.choice[action.obj.result] === "" ? "#fff" : "green"
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

      let drake = [...state.solution];
      drake.splice(action.obj.result, 1, action.obj.selected);
      state.solution = drake;
      //(state.solution);
      let saving = [...state.saved];
      saving.splice(action.obj.result, 1, 'yes');
      state.saved = saving
      return {
        ...state,
        solution: state.solution,
        answers: state.answers,
        current: state.current,
        saved: state.saved,
        queue:state.queue
      };
    case CHANGE:
      //('alive')
      let james = [...state.saved];
      let jimmy = [...state.list];
      if (james[action.num] === 'no') {
        if (jimmy[action.num].options[0].status === 'unchecked'
          && jimmy[action.num].options[1].status === 'unchecked' &&
          jimmy[action.num].options[2].status === 'unchecked') {
          //('safe')
        } else {
          //('unsafe')
          let shoes = [...state.queue];
          let opera = { id: shoes[action.num].id, color: 'orange' }
          shoes.splice(action.num, 1, opera);
          state.queue = shoes;
        }
      }
      return {
        ...state,
        queue: state.queue
      }
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
      var realname='';
     for(var x=0;x<3;x++){
       if(open.options[x].status==='checked'){
          realname=open.options[x].value
       }
     }
      let jubilee=[...state.choice];
      jubilee.splice(action.obj.result,1,realname);
      state.choice=jubilee;
      let dukati = [...state.list];
      dukati.splice(action.obj.result, 1, open);
      state.list = dukati;
      //(state.choice)
      return {
        ...state,
        list: state.list,
        choice:state.choice
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
        for (var i = 0; i < state.list.length; i++) {
          if (state.list[i].ans === state.answers[i].ans) {
            king++;
            //("Ans : " + (i + 1));
          }
        }
        state.finalR = king;
      //("==========================");
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
            name: state.subName,
            solve: state.solution,
            original: state.list
          }
        ]
      };
    case SUBMIT:
      var ink = state.ticked;
      let demo = [...state.queue];
      for (var x = 0; x < demo.length; x++) {
        if (demo[x].color==='green') {
          ink++;
        }
      }
      state.ticked = ink;
      return {
        ...state,
        ticked: state.ticked
      };

    case CLEAR:
      let chunky = [...state.saved];
      chunky.splice(action.num, 1, 'no');
      state.saved = chunky
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
      //(state.answers);
      let near = [...state.queue];
      near.splice(action.num, 1, state.extraQ[action.num]);
      state.queue = near;
      let yolo = [...state.solution];
      yolo.splice(action.num, 1, "");
      state.solution = yolo;
      let kim=[...state.choice];
      kim.splice(action.num,1,'');
      state.choice=kim
      return {
        ...state,
        choice:state.choice,
        solution: state.solution,
        queue: state.queue,
        list: state.list,
        current: state.current,
        answers: state.answers,
        saved: state.saved
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
        queue: state.extraQ,
        solution: ["", "", "", "", "", "", ""],
        choice:["", "", "", "", "", "", ""],
        saved: ['no', 'no', 'no', 'no', 'no', 'no', 'no']
      };
    default:
      return state;
  }
}
