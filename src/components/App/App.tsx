import React from 'react';
import './App.css';
import ParamEditor from '../ParamEditor/ParamEditor';
import { model, params } from '../../utils/constants';

function App() {
  return (
    <div className="App">
      <ParamEditor model={model} params={params}  />
    </div>
  );
}

export default App;
