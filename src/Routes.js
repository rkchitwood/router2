import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import { dogs } from "../db.json"
import DogList from "./DogList";

function Routes(){
    return(
        <Switch>
            <Route exact path="/dogs" >
                <DogList dogs={dogs}/>
            </Route>
            <Route path="/dogs/:name" >
                <DogDetails dogs={dogs}/>
            </Route>
            <Redirect to="/dogs" />
      </Switch>
    );
}

export default Routes;