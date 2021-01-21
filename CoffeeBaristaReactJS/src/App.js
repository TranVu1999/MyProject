import React, { Component } from "react";
import './App.scss';
import ClientScreen from './Screens/ClientScreen';
import {Switch} from "react-router-dom";

import routesClient from './Routes/Client';

class App extends Component  {

  showLayoutClient = (routes) =>{
    if(routes && routes.length > 0){
      return routes.map((item, index) =>{
        return (
          <ClientScreen
            key={index}
            exact = {item.exact}
            path = {item.path}
            Component = {item.component}
          />
        )
      })
    }
  }

  render(){
    return (
      // <>
      //   <ClientScreen />
      // </>
      <Switch>
        {this.showLayoutClient(routesClient)}
      </Switch>
      
    );
  }
  
}

export default App;
