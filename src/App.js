import React from 'react';
import './App.css';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers'

import Field from "./components/Field";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Field/>
            </div>
        </Provider>
    );
}

export default App;
