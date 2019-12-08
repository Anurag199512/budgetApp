import React from'react'
import {connect} from 'react-redux'
import {displayitems,setfiltertext,setsort} from './deault'
import moment from 'moment'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'

function Showexp(props){
    console.log(props)
    //console.log(document.getElementById("changetext").value)
    return (
        <div>
           <h2> List of all added items: <br/>
           </h2>
           
           <input type="text" id="changetext" onChange={(e)=>{
               props.dispatch(setfiltertext(e.target.value))
           }}/>
           <select onChange={(e)=>{
            props.dispatch(setsort(e.target.value.split(" ")[0],e.target.value.split(" ")[1]))
        }}>
            <option value="date asc">Date ASC</option>
            <option value="date desc">Date  DESC</option>
            <option value="amount asc">Amount ASC</option>
            <option value="amount desc">Amount Desc</option>
           </select>
           {
               props.expense.map((item)=>{
                   var show=(<div>
                     <br/>{item.id}<br/> 
                     <Link to ={`/edit/${item.id}`}>{item.description}</Link>---{item.cost}<br/>
                     {item.createddate}<br/>   
                    </div>)
                             return (<div key ={item.id}>{show}</div>)
           })}
        </div>
    )
}


const Showconnectedexp=connect((state)=>{
    const exp=displayitems(state)
    return {
        expense:exp,
        filter:state.filter
    }
})(Showexp);

export default  Showconnectedexp;

