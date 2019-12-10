import React from 'react'
import {connect} from 'react-redux'
import {addexpense} from './deault'
import {SingleDatePicker} from 'react-dates'
import moment from 'moment'
import 'react-dates/lib/css/_datepicker.css'

const now=moment()
console.log(now)
 class Expenseform extends React.Component{  
     state = {
            desp:'',
            cost:'',
            date:moment(),
            error:undefined,
            cal_focus:false
        }
 
    setdesp=(e)=>{
        e.persist()
        this.setState(()=>({
            desp:e.target.value
        }))
    }


    setfocus=({focused})=>{
        //e.persist()
        this.setState(()=>({
            cal_focus:focused
        }))
    }

    setcost=(e)=>{
        e.persist()
        this.setState(()=>({
            cost:e.target.value
        }))
    }

    setdate=(date)=>{
        //e.persist()
        this.setState(()=>({
             date
        }))
    }


    submitform=(e)=>{
        e.preventDefault();
        // const desp=document.getElementById("desp").value;
        // const cost=document.getElementById("cost").value;
        // const date=document.getElementById("date").value;

        
        //console.log(props)
        if(!this.state.desp || !this.state.cost || !this.state.date){
            console.log(this.state.desp,this.state.cost,this.state.date)
            //console.log('A')
            this.setState(()=>({
                 error:"enter all the values or > 0"
                })) 
        }
        else{
            //console.log('Aa')
            this.setState(()=>({
                error:undefined
               })) 
            this.props.dispatch(addexpense({description:this.state.desp ,cost:this.state.cost ,createddate:this.state.date.valueOf() }))
        }
         
        //console.log(desp,cost,date,this.state.error)
    //     this.setState((prevstate)=>{
    //             console.log(prevstate)
    //             console.log(this.props)
    //     }) 
     }
    render(){
        return (<div>
             Expense from  <br/>
            <b> 
                        {this.state.error && this.state.error}
            </b>
           <form onSubmit={this.submitform}>
          
                Description  <input type="text" id="desp" value={this.state.desp} onChange={this.setdesp}
                    placeholder="description of the xpense"/><br/>
                Cost  <input type="number" id="cost" value={this.state.cost} onChange={this.setcost}
                    placeholder="cost of the xpense"/><br/>

                Created Date  
                  
                <SingleDatePicker
                date={this.state.date}//date is momenyt object
                onDateChange={this.setdate}
                focused={this.state.cal_focus}
                onFocusChange={this.setfocus}
                >
                
                </SingleDatePicker>
                <button>Submit</button>
            </form>
        </div>)
    }
} 

export default connect((state)=>{
    //console.log(this.props)
    return {
        expense:state.expense
    }
})(Expenseform)

