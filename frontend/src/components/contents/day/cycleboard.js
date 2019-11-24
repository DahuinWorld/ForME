import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Header from '../../layout/header/header';
import SideBar from '../../layout/sideBar/sideBar';
import StepLine from './stepline/stepLine';
import Cycle1_1 from './cycle1_1/cycle1_1';
import Cycle1_2 from './cycle1_2/cycle1_2';
import Cycle2 from './cycle2/cycle2';
import Cycle3 from './cycle3/cycle3';
import Cycle4 from './cycle4/cycle4';

class CycleBoard extends Component {
    render(){
        return(
            <div>
                cycle보드 안입니다.
                <Header/>
                <SideBar/>
                <StepLine/>
                <Route exact path="/" component={Cycle1_1}/>
                <Route exact path="/cycle1_2" component={Cycle1_2}/>
                <Route path="/cycle2" component={Cycle2}/>
                <Route exact path="/cycle3" component={Cycle3}/>
                <Route exact path="/cycle4" component={Cycle4}/>
            </div>
        );
    }
}

export default CycleBoard;