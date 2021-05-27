import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Queue from "./Queue";
import { connect } from "react-redux";
import Custom from "./Custom";
import Memo from "./Modal";
import {
  next,
  back,
  edit,
  submit,
  showResult,
  clear,
  save,
  change
} from "../Redux/Actions/index";
function YourTask({
  navigation,
  list,
  count,
  edit,
  add,
  saved,
  save,
  next,
  showResult,
  back,
  ticked,
  clear,
  finalR,
  submit,change
}) {
  const [result, setResult] = useState(0);
  const [ind, setInd] = useState(0);
  const [selected, setSelected] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [flag, setFlag] = useState(false);
  function calce(obj) {
    setSelected(obj.number);
    let obj1 = {
      result: obj.result,
      valve: obj.valve
    };
    edit(obj1);
  }
  var payments = [];
  for (let i = 1; i < 8; i++) {
    payments.push(
      <View key={i}>
        <Text>{i}</Text>
      </View>
    );
  }
  function comp(some) {
    if (some === "first") {
      setModalVisible(false);
      showResult();
      navigation.replace("score");
    } else {
      setModalVisible(false);
      setResult(result-1)
    }
  }

  function Moveto(index) {
    change(result)
    setSelected("");
    setResult(index);
    setInd(index);
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ alignSelf: "center" }}>
        {result < 7 && (
          <View style={{ height: 250 }}>
            <Custom result={result} list={list} calce={(obj) => calce(obj)} />
          </View>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 50,
          backgroundColor: "#fff",
          marginHorizontal: 10
        }}
      >
        {!modalVisible && (
          <Button
            title="< back"
            color="green"
            onPress={() => {
              if (result > 0 && result<7) {
                setInd(result - 1);
                change(result)
                console.log(ind);
                setResult(result - 1);
                setSelected('')
              }
            }}
          />
        )}
        {result < 7 && (
          <Button
            title="clear choice"
            onPress={() => {
              setSelected("");
              clear(result);
            }}
          />
        )}
        {result < 7 && (
          <Button
            title="save"
            onPress={() => {
              let open = { result, op: list[result], selected };
              save(open);
            }}
          />
        )}
        {result === 6 && !modalVisible && (
          <Button
            title="submit"
            color="purple"
            onPress={() => {
              setModalVisible(true);
              setResult(result + 1);
              submit();
              setFlag(false);
            }}
          />
        )}
        {result < 6 && (
          <Button
            title=" next >"
            color="navy"
            onPress={() => {
              setInd(result + 1);
              if (result < list.length) {
                change(result)
                setResult(result + 1);
                setSelected("");
              }
              }
            }
          />
        )}
      </View>
      {modalVisible && (
        <Memo
          comp={(text) => comp(text)}
          ticked={ticked}
          modalVisible={modalVisible}
        />
      )}
      {result < 7 && <Queue Moveto={(index) => Moveto(index)} ind={ind} />}
      <View style={{ height: 15 }}></View>
    </View>
  );
}
const mapStateToProps = (state) => ({
  list: state.quiz.list,
  count: state.quiz.count,
  finalR: state.quiz.finalR,
  ticked: state.quiz.ticked,
  saved:state.quiz.saved
});
const mapDispatchToProps = (dispatch) => ({
  save: (text) => dispatch(save(text)),
  back: (text) => dispatch(back(text)),
  edit: (text) => dispatch(edit(text)),
  submit: () => dispatch(submit()),
  showResult: () => dispatch(showResult()),
  clear: (num) => dispatch(clear(num)),
  change:(num)=>dispatch(change(num))
});
export default connect(mapStateToProps, mapDispatchToProps)(YourTask);
