import React from 'react'
import Expenseform from './expenseform'
import Header from './header'

export default  function addexp(props){
    //console.log('pp',props)
    return (<div>
        <Header/>
            <Expenseform history={props.history}/>
        </div>)
    }



