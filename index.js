import { registerRootComponent } from 'expo';

import App from './App';
import { AppRegistry } from 'react-native';
import React from 'react';
import { createStore } from 'redux';
import rootReducer from './reducers'
import { Provider } from 'react-redux';
import { name } from './app.json';

// STORE

// ACTION
const increment = () => {
    return {
        type: 'INCREMENT'
    }
}
const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()))

// DISPATCH
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

const reduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
AppRegistry.registerComponent("main", () => reduxApp);
