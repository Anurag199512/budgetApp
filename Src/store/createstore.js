import {createStore, combineReducers,applyMiddleware} from 'redux'

import {expensereducer} from '../reducer/expense'
import {filterreducer} from '../reducer/filter'
import {authReducer} from '../reducer/auth'

import Thunk from 'redux-thunk'

export default createStore(
    combineReducers({
        expense:expensereducer,
        filter:filterreducer,
        auth:authReducer
        }),
        applyMiddleware(Thunk)
    ) 
  

