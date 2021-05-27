import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

function Solution({ route, navigation }) {
  const [sum, setSum] = React.useState(0);
  const [list, setList] = React.useState(route.params.name);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          MARKS : {route.params.mark}
        </Text>
        <Text style={{ fontSize: 30, marginTop: 20 }}>
          {list[sum].id}.{list[sum].que}
        </Text>
        <Text
          style={{
            fontSize: 25,
            marginVertical: 10,
            color:
              route.params.user[sum] === list[sum].options[0].value
                ? route.params.user[sum] === list[sum].ans
                  ? "green"
                  : "red"
                : list[sum].options[0].value === list[sum].ans
                ? "green"
                : "black"
          }}
        >
          {list[sum].options[0].value}
        </Text>
        <Text
          style={{
            fontSize: 25,
            color:
              route.params.user[sum] === list[sum].options[1].value
                ? route.params.user[sum] === list[sum].ans
                  ? "green"
                  : "red"
                : list[sum].options[1].value === list[sum].ans
                ? "green"
                : "black"
          }}
        >
          {list[sum].options[1].value}
        </Text>
        <Text
          style={{
            fontSize: 25,
            marginVertical: 10,
            color:
              route.params.user[sum] === list[sum].options[2].value
                ? route.params.user[sum] === list[sum].ans
                  ? "green"
                  : "red"
                : list[sum].options[2].value === list[sum].ans
                ? "green"
                : "black"
          }}
        >
          {list[sum].options[2].value}
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>
          SOLUTION : {list[sum].ans}
          <Text
            style={{
              backgroundColor:
                route.params.user[sum] === list[sum].ans ? "green" : "red"
            }}
          ></Text>
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#fff",
            alignSelf: "center",
            backgroundColor:
              route.params.user[sum] === list[sum].ans ? "green" : "red"
          }}
        >
          {route.params.user[sum] === list[sum].ans
            ? "CORRECT"
            : route.params.user[sum] === ""
            ? "UNATTEMPTED"
            : "FALSE"}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 50
        }}
      >
        <View>
          <Button
            title="<back"
            color="brown"
            onPress={() => {
              if (sum > 0) {
                setSum(sum - 1);
              }
            }}
          />
        </View>
        <View style={{ width: 30 }}></View>
        <Button
          title="START NEW PAPER"
          color="orange"
          onPress={() => navigation.navigate("Subject")}
        />
        <View style={{ width: 30 }}></View>
        <View>
          <Button
            title="next>"
            color="navy"
            onPress={() => {
              if (sum < 6) {
                setSum(sum + 1);
              }
            }}
          />
        </View>
      </View>
    </View>
  );
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Solution);
