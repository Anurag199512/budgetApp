import React from 'react'
import {editexpense} from './deault'
import Expenseform from './expenseform'

export function editexp(props){
    console.log(props)
    return (
        <div>Edit expense here for id {props.match.params.id}
        <Expenseform val={props.match.params.id} history={props.history} />
        </div>)
}