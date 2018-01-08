//import liraries
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Navigator from './routes/Navigator';
import reducers from './reducers';

// Yellow Box warning
console.disableYellowBox = true; 

// create a component
class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Navigator />
            </Provider>
        );
    }
}


//make this component available to the app
export default App;
