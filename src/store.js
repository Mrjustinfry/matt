import {createStore} from 'redux'

import {planReducer} from './reducers/reducers';

export default createStore(planReducer);