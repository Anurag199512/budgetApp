import React from 'react'
const uuidv1 = require('uuid/v1');
import {database,firebase} from '../../firebase/firebase'

export function defal(){
    return (<div style={{color:"red"}}>URL do not exist.Go to proper URL
        </div>)
}



function addexpense(ob){
    //console.log('B',description,cost,createddate)
    return ({
        type:"addexp",
        ob 
    })
}


export function startaddexpense({description="",cost=0,createddate=0,note=''}={}){
    return (dispatch)=>{
        const newob={
        description,cost,createddate,note
     }
        database.ref('expense').push(newob).then((ref)=>{
                dispatch(addexpense({
                    id:ref.key,
                    ...newob
                }))
        })
    }

}

export function removeexpense(id){
    //console.log(id)
    return ({
        type:"removeexp",
        id
    })
}

function editexpense(id,update={}){
    //console.log(id,'B')
    return({
        type:"editexpense",
        id,
        update
    })
}

export function starteditexpense(id,update={}){

    database.ref().once('value').then((ss)=>{
        console.log(ss.val())
    })
    return (dispatch)=>{
   //     const o='expense/${id}' +id
        database.ref(o).update({
            note:update.note,
            description:update.desp,
            cost:update.cost,
            created:update.created
        }).then(()=>{
            dispatch(editexpense(id,update))
        })
    }    
}


export function setfiltertext(text){
    //console.log(text)
    return({type:'filter_text',text})
}

export function setsort(sortby,order="asc"){
    //console.log(sortby,order,'N')
    return({type:'SORT',sortby,order})
}


export function displayitems(cur_state){
    //console.log(cur_state.filter.text,'A')
    var news=cur_state.expense
    if(cur_state.filter.text){
        news=cur_state.expense.filter(element => {
           // console.log(element.description)
            return element.description.toLowerCase().includes(cur_state.filter.text.toLowerCase())
        });
         
    }
    //console.log(news)
    if(cur_state.filter.sortby=='amount'){
            if(cur_state.filter.order=='asc'){
                //console.log('as00')
                news.sort(function (a,b){
                    return a.cost<b.cost?-1 :1
                })
            }
            else{
               // console.log('as001')
                news.sort(function (a,b){
                    return a.cost>b.cost?-1 :1
                
            })
        }
    }
    if(cur_state.filter.sortby=='date'){
        if(cur_state.filter.order==='asc'){
            //console.log('as00')
            news.sort(function (a,b){
                // if(a.createddate>b.createddate)
                //     console.log('a>b')
                // else 
                //     console.log('b>a')
                
               // console.log(a.createddate,a.createddate+5)

                return a.createddate>b.createddate?1 :-1
            })
        }
        else{
            //console.log('as001')
            news.sort(function (a,b){
                return a.createddate>b.createddate?-1 :1
            
        })
    }
}

console.log('A',news)
   return news
}

 
