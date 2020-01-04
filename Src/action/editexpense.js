import React from 'react'
import {editexpense} from './deault'
import Expenseform from './expenseform'
import Header from './header'
export function editexp(props){
    //console.log(props)
    ////Edit expense here for id {props.match.params.id}
        
    return (
        <div>
        <Header/>
        <Expenseform val={props.match.params.id} history={props.history} />
        </div>)
}