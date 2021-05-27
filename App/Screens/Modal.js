import React from "react";
import { View, Text, Modal, Pressable } from "react-native";

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
            marginTop: 550,
            marginHorizontal: 10,
            marginBottom:20
          }}
        >
          <Text style={{ fontSize: 20, color: "#fff" }}>
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
                  marginRight: 65,
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
                  marginLeft: 50,
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
