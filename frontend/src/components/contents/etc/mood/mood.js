import React,{Component} from 'react';
import PeriodSetting from './periodSetting';

class Mood extends Component {
    render(){
        return(
            <div>
                <div>기간설정</div>
                <PeriodSetting/>
                <div>기분 통계 그래프</div>
            </div>
        );
    }
}

export default Mood;