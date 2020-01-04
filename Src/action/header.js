import React from 'react'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import {startlogout} from './authentication' 

// function Header(props){

//     return (<div style={{background:"rgb(10,40,10,.3)",marginBottom:"10px"}}> 
// <Link to ="/Dashboard">Dashboard</Link>
// <Link to ="/add">Add Expense </Link>
// <Link to ="/help">Help</Link>
// <button onClick={props.startlogout}>Log out</button>
// </div>)

// }

function Header(props){

    return (<div className="header"> 
    <div className="container_header">
        <div className="header_link_a">
            <h1 style={{margin:"0px"}}>    
                <Link className="header_link" to ="/Dashboard">BudgetApp</Link>
            </h1>
            <a className="header_a" style={{color:"white"}} onClick={props.startlogout}>Log out</a>
        </div>
    </div>
</div>)

}



const mapdispatch=(dispatch)=>{
    return {
        startlogout:()=>dispatch(startlogout())
    }
}
export default connect(undefined,mapdispatch)(Header)

