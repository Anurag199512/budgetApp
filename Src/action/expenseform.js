import React from 'react'
import {connect} from 'react-redux'
import {startaddexpense,starteditexpense,removeexpense} from './deault'
import {SingleDatePicker} from 'react-dates'
import moment from 'moment'
import 'react-dates/lib/css/_datepicker.css'
//import { editexp } from './editexpense';

const now=moment()
//console.log(now)
class Expenseform extends React.Component{  
    constructor(props){ 
        super(props)
        this.data={}
        
        this.props.expense.map((item)=>{
                if(item.id===this.props.val){
                    //console.log('matched')
                    this.data=item
                    this.found=true
                }
        })

        //this.found=this.data.description.length>0?true:undefined
 
        this.state = {
            desp:''||this.data.description,
            note:''||this.data.note,
            cost:0 ||this.data.cost,
            date:moment() ||this.data.date,
            error:undefined,
            cal_focus:false
        }

        //console.log(this.props.val,this.props.expense,'Aaa')
    }
 
    setdesp=(e)=>{
        e.persist()
        this.setState(()=>({
            desp:e.target.value
        }))
    }

    setnote=(e)=>{
        e.persist()
        this.setState(()=>({
            note:e.target.value
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

        if(!this.state.cost && !this.state.desp)
        {
            this.setState(()=>( {error:'Please provide the amount and description' }))
        }

        else if(!this.state.desp)
        {
            this.setState(()=>( {error:'Please provide the description' }))
        }
        else if(!this.state.cost)
        {
            this.setState(()=>( {error:'Please provide the amount' }))
        }
        else {
            this.setState(()=>( {error:' ' }))
            if (!this.found)
            {  
                  this.props.dispatch(startaddexpense({description:this.state.desp ,cost:Number(this.state.cost) ,note:this.state.note,createddate:Number(this.state.date.valueOf()) }))
                  this.props.history.push('/Dashboard')  
                }
            else
                {
                    this.props.dispatch(starteditexpense(this.props.val,{description:this.state.desp ,cost:Number(this.state.cost),note:this.state.note,createddate:Number(this.state.date.valueOf()) }))
                    this.props.history.push('/Dashboard')  
                }
        }


        //console.log('P',this.props)
        
        // if(!this.state.desp || !this.state.cost || !this.state.date){
        //     //console.log(this.state.desp,this.state.cost,this.state.date)
        //     //console.log('A')
        //     this.setState(()=>({
        //          error:"enter all the values or > 0"
        //         })) 
        // }
        // else{
        //     //console.log('Aa')
        //     this.setState(()=>({
        //         error:undefined
        //        })) 
        //     this.props.dispatch(addexpense({description:this.state.desp ,cost:this.state.cost ,createddate:this.state.date.valueOf() }))
        // }
         
        //console.log(desp,cost,date,this.state.error)
    //     this.setState((prevstate)=>{
    //             console.log(prevstate)
    //             console.log(this.props)
    //     }) 
        
     }
    render(){
        
        return (<div className="container_header">
        <br/><br/><br/><br/>
        <div className="list_header">
             Expense from  
             </div>
             <br/><br/>
            <b> 
                        {this.state.error && this.state.error}
            </b>
           <form onSubmit={this.submitform}>
                <span>Description</span> <br/>  <input className="itemaddpage" type="text"   id="desp" value={this.state.desp} onChange={this.setdesp}
                placeholder="description of the expense"/><br/><br/>

                <span>Additional Detail </span><br/> <textarea className="itemaddpage" type="textarea"  rows="4" cols="80" id="note" value={this.state.note} onChange={this.setnote}
                    placeholder="Side note on the expense(Optional)"/><br/><br/>
                    <span>Cost  </span><br/><input className="itemaddpage" type="number" id="cost" value={this.state.cost} onChange={this.setcost}
                    placeholder="cost of the expense"/><br/><br/>

                    <span>Created Date  </span><br/>
                  
                <SingleDatePicker
                date={this.state.date}//date is moment object
                onDateChange={this.setdate}
                focused={this.state.cal_focus}
                onFocusChange={this.setfocus}
                 
                >
                
                </SingleDatePicker><br/><br/>
                
                <button className="listitem_btn">Submit</button>
            </form>
        </div>
        )
    }
} 

export default connect((state)=>{
    //console.log(props,"bc")
    return {
        expense:state.expense
    }
})(Expenseform)

