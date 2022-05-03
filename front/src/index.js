import React from 'react';
import ReactDOM from 'react-dom';
import App from './Router';
import { store } from './store/index';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
const persist = persistStore(store);
//to start persist uncomment ancient evil
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {/*<PersistGate persistor={persist}>*/}
            <App />
            {/*</PersistGate>*/}
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);