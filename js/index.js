import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import RepositoryList from './components/repository-list';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
        <Provider store={store}>
            <RepositoryList />
        </Provider>,
        document.getElementById('app')
    )
);

// import * as actions from './actions/index';
// import * as reducers from './reducers/index';
// import store from './store';

// Allows for actions to be run through reducer
// store.dispatch(actions.addRepository('joe'));

//getState inspect current state held in store Logs [{ name: 'joe', rating: null}]
// console.log(store.getState()); 