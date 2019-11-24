import React, {Component} from 'react';
import DateInput from './dateInput';
import CalendarForPresent from './calendarforpresent';
import ClickPresentShow from './clickPresentShow';

class Collect extends Component {
    render(){
        return(
            <div>
                <div>날짜입력</div>
                <DateInput/>
                <CalendarForPresent/>
                <ClickPresentShow/>
            </div>
        );
    }
}

export default Collect;