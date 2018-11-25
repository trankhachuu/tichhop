import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../Home/Home';
import Login from '../UserComponent/Login';
import Register from '../UserComponent/Register';
import Thunhap from '../InfoComponent/Thunhap/Thunhap';

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component= {Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/thunhap" component={Thunhap}/>
                </Switch>
            </div>
        );
    }
}

export default RouterURL;