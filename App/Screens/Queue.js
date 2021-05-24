import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";

export default function Queue({ ind, Moveto }) {
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
          data={payments}
          renderItem={({ item, index }) => (
            <View
              style={{
                marginLeft: 5,
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
                borderWidth: 1,
                backgroundColor: ind == index ? "orange" : "#fff"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  Moveto(index);
                  console.log(ind+'=='+index)
                }}
              >
                <Text style={{ marginLeft: 8, fontSize: 20 }}>{index + 1}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}
