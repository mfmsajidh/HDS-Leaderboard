import React, {Component} from 'react';
import UserRecordUI from "./Components/UserRecordUI";
import AppBarUI from "./Components/AppBarUI";
import ProgressBarUI from "./Components/ProgressBarUI";

class App extends Component {
    render(){
        return (
            <>
                <UserRecordUI/>
                {/*<ProgressBarUI>*/}
                {/*<AppBarUI/>*/}
            </>
        )
    }
}

export default App;
