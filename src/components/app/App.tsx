import React from "react";
import ConsultantCard from "../consultantCard/ConsultantCard";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { rootReducer } from "../../utils/store/rootReducer";
const store  = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ConsultantCard/>
      </div>
    </Provider>
  );
}

export default App;
