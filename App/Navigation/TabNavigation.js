import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import YourTask from "../Screens/YourTask";
import { createStackNavigator } from "@react-navigation/stack";
import Score from "../Screens/Score";
import Subject from "../Screens/Subject";
import Solution from "../Screens/Solution";
const Stack = createStackNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Subject"
          component={Subject}
          options={{
            title: "SUBJECTS",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <Stack.Screen
          name="EXAM"
          component={YourTask}
          options={{
            title: "ALL THE BEST",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              alignSelf: "center",
              marginRight: 60
            }
          }}
        />
        <Stack.Screen
          name="score"
          component={Score}
          options={{
            title: ": RESULTS :",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              alignSelf: "center",
              marginRight: 60
            }
          }}
        />
        <Stack.Screen
          name="solution"
          component={Solution}
          options={{
            title: " SOLUTION ",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              alignSelf: "center",
              marginRight: 60
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
