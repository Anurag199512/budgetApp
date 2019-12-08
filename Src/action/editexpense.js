import React from 'react'
export function editexp(props){
    console.log(props)
    return (
        <div>Edit expense here for id {props.match.params.id}
        
        </div>)
}