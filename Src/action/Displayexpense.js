import React from'react'
import {connect} from 'react-redux'
import {displayitems,setfiltertext,setsort,firebaseremove} from './deault'
import moment from 'moment'
import {Link} from 'react-router-dom'

function gettotal(exp){
     
    let total=0
    exp.map((item)=>{
        total=total+Number(item.cost)
    })
     
    return Number(total)
}

function Showexp(props){
    //console.log(props)
    //console.log(document.getElementById("changetext").value)
    console.log(props.expense.length)
    let val=props.expense.length>1?'expenses':'expense'
    return (
        <div>
            <div className="subheader">
                <div>
                {    
                    props.expense.length>0?
                            <p  style={{display:"inline"}}> 
                                
                                    You have <b>{props.expense.length}</b> {val} and total is <b>&#8377;{gettotal(props.expense)} </b>
                                
                            </p>    
                            :<p style={{display:"inline"}}>You dont have any item to display</p>
                }
                <br/>  
                <Link to ="/add"><button>Add Expense</button></Link>
                </div>
            </div>
        <br/> 
        <div className="container">
            <div> 
                <input className="container_search" type="text" id="changetext" placeholder="Search your expense....." onChange={(e)=>{
                    props.dispatch(setfiltertext(e.target.value))
                }}/>
            </div>
            <div>
                    <select className="container_sort" onChange={(e)=>{
                props.dispatch(setsort(e.target.value.split(" ")[0],e.target.value.split(" ")[1]))
            }}>
                <option value="date asc">Date ASC &#8593;</option>
                <option value="date desc">Date  DESC &#8595;</option>
                <option value="amount asc">Amount ASC &#8593;</option>
                <option value="amount desc">Amount Desc &#8595;</option>
                </select>
            </div>

        
        </div>
            <br/><br/>    
            <div className="container_header">
                
            {  
                props.expense.length>0?<div className="list_header">
                    <div className="showmobile">Expenses</div> </div>:<div></div>
            }
                
            </div>            
           {
               props.expense.map((item)=>{
                   var show=(<div className="container_header">
                   
                   {
                       props.expense.length>0?
                       <div className="items">
                       <Link className="listitem_link" to ={`/edit/${item.id}`}>
                            <div>
                                {item.description} {item.note}
                            </div>
                            <div>
                                {item.cost}
                            </div>
                                                 
                            {moment(item.createddate).format('ll')}
                        </Link>
                          
                        <button className="listitem_btn" onClick={()=>
                            {props.dispatch(firebaseremove(item.id))}}
                        >Remove</button> 
                        </div>: <div className="items"> No Expense present to show. </div>
                    }           
                    
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

