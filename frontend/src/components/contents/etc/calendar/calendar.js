import React, {Component} from 'react';
import DateInput from '../collect/dateInput';
import MonthSchedule from './monthSchedule';
import CalendarForSchedule from './calendarForSchedule';

class Calendar extends Component {
    render(){
        return(
            <div>
                <DateInput/>
                <CalendarForSchedule/>
                <MonthSchedule/>
            </div>
        );
    }
}

export default Calendar;