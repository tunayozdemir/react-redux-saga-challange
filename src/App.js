import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layouts from './components/Antd/Layout'
import Routes from './components/config/routes';

import 'antd/dist/antd.min.css'
import './App.scss';


function App() {

  const route = Routes.map(({ path, component }, index) => {
    return <Route exact path={path} key={index} component={component} />
  })


  return (
    <Router basename="/">
      <Layouts>
        {route}
      </Layouts>
    </Router>
  );
}

export default App;
