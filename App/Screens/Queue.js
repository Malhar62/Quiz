import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import { connect } from "react-redux";
function Queue({ ind, Moveto, current, queue }) {
  var payments = [];
  for (let i = 1; i < 8; i++) {
    payments.push(
      <View key={i}>
        <Text>{i}</Text>
      </View>
    );
  }
  return (
    <View>
      <View
        style={{ position: "absolute", alignSelf: "center", marginTop: 110 }}
      >
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={queue}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: 40,
                marginLeft: 10,
                height: 40,
                borderRadius: 40 / 2,
                backgroundColor: ind === index ? "#e0365e" : "#fff",
                borderWidth: ind === index ? 2 : 0
              }}
            >
              <View
                style={{
                  marginLeft: 3,
                  marginTop: 3,
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  borderWidth: 1,
                  backgroundColor: item.color
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    Moveto(index);
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 8,
                      fontSize: 20,
                      color: item.color === "green" ? "#fff" : "black"
                    }}
                  >
                    {item.id}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
const mapStateToProps = (state) => ({
  list: state.quiz.list,
  count: state.quiz.count,
  finalR: state.quiz.finalR,
  queue: state.quiz.queue,
  current: state.quiz.current
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Queue);
