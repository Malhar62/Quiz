import React from "react";
import { Provider } from "react-redux";
import TabNavigation from "./App/Navigation/TabNavigation";
import { store } from "./App/Redux/Store";
function App() {
  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
}

export default App;
