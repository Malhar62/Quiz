import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { connect } from "react-redux";
import { Array } from "./Array";

import { add } from "../Redux/Actions";
function Subject({ add, navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={Array}
        numColumns={2}
        key={0}
        renderItem={({ item, index }) => (
          <View
            style={{
              marginTop: 30,
              marginLeft: 30,
              height: 170,
              width: 150,
              borderWidth: 0,
              borderRadius: 10
            }}
            elevation={5}
          >
            <TouchableOpacity
            style={{marginTop:25}}
              onPress={() => {
                let queen = [...item.furray];
                let obj = { queen, name: item.name };
                add(obj);
                navigation.navigate("EXAM");
              }}
            >
              <Image
                source={{ uri: item.img }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  alignSelf: "center"
                }}
              />
              <Text style={{ fontSize: 20, alignSelf: "center" }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item,index)=>index.toString()}
      />
    </View>
  );
}
const mapStateToProps = (state) => ({});

const maDispatchToProps = (dispatch) => ({
  add: (text) => dispatch(add(text))
});
export default connect(mapStateToProps, maDispatchToProps)(Subject);
