import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable
} from "react-native";

export default function Memo({ modalVisible, ticked, comp }) {
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            backgroundColor: "maroon",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 450,
            marginHorizontal: 10
          }}
        >
          <Text style={{ fontSize: 30, color: "#fff" }}>
            QUESTIONS DONE : {ticked}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "space-between"
            }}
          >
            <Pressable
              onPress={() => {
                comp("first");
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  textDecorationLine: "underline",
                  marginRight: 60,
                  fontStyle: "italic"
                }}
              >
                CONFIRM SUBMIT ?
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                comp("second");
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  marginLeft: 60,
                  textDecorationLine: "underline",
                  fontStyle: "italic"
                }}
              >
                CANCEL
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
