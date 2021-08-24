import React, { Component } from 'react';
import {
    loadFromStorage,
    storage,
    CurrentUserProfile
} from "../../../common/storage";
import DailyAttendances  from '../UserScreen/attendance/DailyAttendance';
import AdminTodayAttendance from '../attendance/AdminTodayAttendance';
export default class DailyAttendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: 'admin'
        }
    }

    async  componentDidMount() {

        var userDetails = await loadFromStorage(storage, CurrentUserProfile);
        this.setState({ userType: userDetails.item.UserType })
        global.userType=userDetails.item.UserType;

    };

    render() {
        console.log('daily attendance',global.userType)
        if(this.state.userType=='admin'){
            return (<AdminTodayAttendance/>);
        }
        else{
            console.log('i am going to attendance');
            return (<DailyAttendances/>)
        }
     };
}