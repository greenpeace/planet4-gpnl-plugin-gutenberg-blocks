import React, { Component } from 'react';
import Registration from './components/Registration';

import 'react-datepicker/dist/react-datepicker.css';


class App extends Component {

    render() {
        return (
            <div id="root">
                <div className="col-sm-6 col-sm-offset-3">
                    <Registration/>
                </div>
            </div>
        )
    }
}

export default App;
