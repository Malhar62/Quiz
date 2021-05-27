import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Animated,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
function Score({ finalR, scoreList, navigation }) {
  const longines = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(longines, {
      toValue: 1,
      duration: 2000,
      useNativeDriver:false
    }).start();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
      }}
    >
      <Animated.View
        style={{
          opacity: longines.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: "clamp",
            backgroundColor: "cyan"
          })
        }}
      >
        <Text style={{ fontSize: 30, marginTop: 0 }}>
          YOUR SCORE : {finalR}
        </Text>
      </Animated.View>
      <Text style={{ marginTop: 20, fontWeight: "bold" }}>PREVIOUS SCORES</Text>
      <View style={{ height: 407, alignSelf: "center" }}>
        <View style={{ marginTop: 20, marginRight: 0 }}>
          <View style={{}}>
            <FlatList
              data={scoreList}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    alignSelf: "center",
                    marginTop: 10,
                    flexDirection: "row",
                    marginLeft: item.marks === 7 ? 45 : 0
                  }}
                >
                  <View
                    style={{ width: 30, height: 40, backgroundColor: "orange" }}
                  >
                    <Text
                      style={{
                        marginTop: 10,
                        alignSelf: "center",
                        color: "white",
                        fontWeight: "bold"
                      }}
                    >
                      {item.marks}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 120,
                      height: 40,
                      backgroundColor: "navy",
                      marginLeft: 10
                    }}
                  >
                    <Text
                      style={{
                        marginTop: 10,
                        alignSelf: "center",
                        color: "white"
                      }}
                    >
                      {item.name === "Social" ? "Social Science" : item.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 70,
                      marginLeft: 10,
                      height: 40,
                      backgroundColor: "maroon"
                    }}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("solution", {
                          user: item.solve,
                          name: item.original,
                          mark: item.marks
                        })
                      }
                    >
                      <Text
                        style={{
                          color: "#fff",
                          alignSelf: "center",
                          marginTop: 10
                        }}
                      >
                        solution
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {item.marks === 7 && (
                    <View>
                      <Text style={{ fontSize: 30, marginLeft: 5 }}>🥳</Text>
                    </View>
                  )}
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  finalR: state.quiz.finalR,
  scoreList: state.quiz.scoreList
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Score);
