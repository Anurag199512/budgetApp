import {createStore, combineReducers} from 'redux'

import {expensereducer} from '../reducer/expense'
import {filterreducer} from '../reducer/filter'

export default createStore(
    combineReducers({
        expense:expensereducer,
        filter:filterreducer
        }) 
    ) 
  

