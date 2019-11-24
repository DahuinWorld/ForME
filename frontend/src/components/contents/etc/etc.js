import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Mood from './mood/mood';
import Collect from './collect/collect';
import Calendar from './calendar/calendar';
import Setting from './setting/setting';
import PageName from '../../layout/pageName/pageName';
import SideBar from '../../layout/sideBar/sideBar';
import Header from '../../layout/header/header';

class Etc extends Component {
    render(){
        return(
            <div>
                <Header/>
                <SideBar/>
                <PageName/>
                
                <Route path="" component={Mood}/>
                <Route path="" component={Collect}/>
                <Route path="" component={Calendar}/>
                <Route path="" component={Setting}/>
            </div>
        );
    }
}

export default Etc;