import React, { Component } from 'react';
import '../App/App.css';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-login">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <a href="/" className="active" id="login-form-link">Login</a>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form id="login-form" method="post" style={{ display: 'block' }}>
                                            <div className="form-group">
                                                <input type="text" name="username" className="form-control" placeholder="Username" value="" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" className="form-control" placeholder="Password" />
                                            </div>
                                            <div className="form-group text-center">
                                                <input type="checkbox" className="" name="remember" id="remember" />
                                                <label htmlFor="remember"> Remember Me</label>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-sm-6 col-sm-offset-3">
                                                        <input type="submit" name="login-submit" id="login-submit" className="form-control btn btn-login" defaultValue="Log In" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;