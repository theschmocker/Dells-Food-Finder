import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import FoodFinder from './components/FoodFinder';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Header>Dff</Header>
                    <Switch>
                        <Route exact path="/" component={FoodFinder}/>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
