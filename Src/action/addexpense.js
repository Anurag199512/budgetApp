import React from 'react'
import Expenseform from './expenseform'

export default  function addexp(props){
    //console.log('pp',props)
    return (<div>
            Add Expense from class component
            <Expenseform history={props.history}/>
        </div>)
    }



