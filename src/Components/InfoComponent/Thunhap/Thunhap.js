import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

class Thunhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    onChange = (date) => {
        this.setState({
            date
        });
    }

    render() {
        return (
            <div className="" style={{ margin: '0' }}>
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <ul className="navbar-nav px-3">
                        <li className="">
                            <a className="navbar-brand col-sm-2 col-md-2 mr-0" href="/">Company name</a>
                        </li>
                    </ul>
                    <a className="navbar-brand col-sm-9 col-md-9 mr-0"></a>
                    <ul className="navbar-nav px-1 col-sm-1 mr-0">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="/">Sign out</a>
                        </li>
                    </ul>
                </nav>
                <div className="row">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        <i className="fas fa-home"></i>Dashboard
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">

                        <div className="row">
                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <DateTimePicker
                                    onChange={this.onChange}
                                    value={this.state.date}
                                />
                            </div>

                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                <form>
                                    <label className="radio-inline">
                                        <input type="radio" name="optradio" defaultChecked />Toàn thời gian
                                </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="optradio" />Bán thời gian
                                </label>
                                </form>
                            </div>

                        </div>

                       <div className="container">
                            <ul className="pager" style={{ fontSize: '16px' }}>
                                <li className="next"><a href="/">Next >></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Thunhap;