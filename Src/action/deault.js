import React from 'react'
const uuidv1 = require('uuid/v1');

export function defal(){
    return (<div style={{color:"red"}}>URL od not exist.Go to proper URL
        </div>)
}



export function addexpense({description=" ",cost=" ",createddate=" "}={}){
    console.log('B',description,cost,createddate)
    return ({
        type:"addexp",
        ob:{
            id:uuidv1(),
            description,
            cost,
            createddate
        }
    })
}

export function removeexpense(id){
    //console.log(id)
    return ({
        type:"removeexp",
        id
    })
}

export function editexpense(id,update={}){
    //console.log(id,'B')
    return({
        type:"editexpense",
        id,
        update
    })
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
        if(cur_state.filter.order=='asc'){
            //console.log('as00')c
            news.sort(function (a,b){
                return a.createddate<b.createddate?-1 :1
            })
        }
        else{
           // console.log('as001')
            news.sort(function (a,b){
                return a.createddate>b.createddate?1 :-1
            
        })
    }
}

    //console.log('A',news)
   return news
}

 
