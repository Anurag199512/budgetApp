import React from 'react'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import {startlogout} from './authentication' 

function Header(props){

    return (<div style={{background:"rgb(10,40,10,.3)",marginBottom:"10px"}}> 
<Link to ="/Dashboard">Dashboard</Link>
<Link to ="/add">Add Expense </Link>
<Link to ="/help">Help</Link>
<button onClick={props.startlogout}>Log out</button>
</div>)

}



const mapdispatch=(dispatch)=>{
    return {
        startlogout:()=>dispatch(startlogout())
    }
}
export default connect(undefined,mapdispatch)(Header)

