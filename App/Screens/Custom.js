import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { RadioButton } from 'react-native-paper';

function Custom({ list, result, calce }) {
  return (
    <View>
   
      <Text style={{ fontSize: 20, marginTop: 30, fontWeight: "bold" }}>
        {list[result].id}.{list[result].que}
      </Text>
      <View style={{ marginLeft: 30 }}>
      <View style={{flexDirection:'row',marginTop:30}}>
      <RadioButton
        value="first"
        status={list[result].options[0].status}
        onPress={() => {
            let obj = {
              number: list[result].options[0].value,
              result,
              valve: list[result].options[0].number
            };
            calce(obj);
          }}
      />
       
          <Text
            style={{
             fontSize:25,
              color:
                list[result].options[0].status === "unchecked"
                  ? "black"
                  : "red",
              fontWeight: "bold",marginTop:0
            }}
          >
            {list[result].options[0].value}
          </Text>
        </View>
        <View style={{flexDirection:'row',marginTop:30}}>
        <RadioButton
        value="first"
        status={list[result].options[1].status}
        onPress={() => {
            let obj = {
              number: list[result].options[1].value,
              result,
              valve: list[result].options[1].number
            };
            calce(obj);
          }}
      />
      
          <Text
            style={{
              fontSize:25,
              color:
                list[result].options[1].status === "unchecked"
                  ? "black"
                  : "red",
              fontWeight: "bold",marginTop:0
            }}
          >
            {list[result].options[1].value}
          </Text>
        </View>
        <View style={{flexDirection:'row',marginTop:30}}>
        <RadioButton
        value="first"
        status={list[result].options[2].status}
        onPress={() => {
            let obj = {
              number: list[result].options[2].value,
              result,
              valve: list[result].options[2].number
            };
            calce(obj);
          }}
      />
          <Text
            style={{
              fontSize:25,
              color:
                list[result].options[2].status === "unchecked"
                  ? "black"
                  : "red",
              fontWeight: "bold",marginTop:0
            }}
          >
            {list[result].options[2].value}
          </Text>
        </View>
      </View>
    </View>
  );
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Custom);
