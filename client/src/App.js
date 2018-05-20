import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
} from 'react-router-dom';

import FoodFinder from './components/FoodFinder';
import Header from './components/Header';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Header>Dff</Header>
                    <Switch>
                        <Route exact path="/" component={FoodFinder}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
