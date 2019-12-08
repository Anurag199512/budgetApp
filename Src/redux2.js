import {createStore, combineReducers} from 'redux'

const uuidv1 = require('uuid/v1');
 
console.log(uuidv1())

 
const expstate={
    id:uuidv1(), 
    desp:"",
    cost:0,
    createddate:'today'
}


const defaultstate={
    expense:[],

    filter:{
        text:"",
        sortby:"",
        startdate:undefined,
        enddate:undefined,
        order :"asc"
    }

}
var tid;

function addexpense({description=" ",cost=" ",createddate=" "}={}){
    //console.log(ob)
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

function removeexpense(id){
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

function expensereducer(state=defaultstate.expense,action){
     
    switch(action.type){
        case 'addexp':
            //console.log(action.ob)
            tid=action.ob.id
            return [
                ...state,
                action.ob
            ];
        case 'removeexp':
        //console.log(action.id)
            return state.filter((ob)=>{
                return ob.id!==action.id
            })
        case 'editexpense':
        //console.log(action)
            return state.map((ob1)=>{
                //console.log(ob1,'C',...ob1)
                if(ob1.id==action.id){
                    return {
                        ...ob1,
                        ...action.update
                    }
                }
                else return ob1
            })
        default:return state
    }
}
let i=0
function displayitems(cur_state){
    //console.log(cur_state.filter.text,'A')
    var news=cur_state.expense
    if(cur_state.filter.text){
        news=cur_state.expense.filter(element => {
           // console.log(element.description)
            return element.description.toLowerCase().includes(cur_state.filter.text.toLowerCase())
        });
         
    }
    console.log(news)
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
    
    console.log(news)
}
function filterreducer(state=defaultstate.filter,action){
    //console.log(state,i,action)
    //i=i+1
    switch(action.type){
        case 'filter_text': //console.log(action)
        return ({
                ...state,
                text:action.text
        })
        case 'SORT':
        return ({
            ...state,
            sortby:action.sortby,
            order :action.order

        })

        default:return state
    }
}

const str=createStore (
    combineReducers({
        expense:expensereducer,
        filter:filterreducer
        }) 
)
//console.log(str.getState())
str.subscribe(()=>{
    console.log(str.getState())
    displayitems(str.getState())
})

const one=str.dispatch(addexpense({description:"For Rent",cost:5000}))


const two=str.dispatch(addexpense({description:"For Food",cost:250,createddate:"today"}))

//console.log(one)

str.dispatch(editexpense(two.ob.id,{cost:2500,createddate:"yesterday"}))

//str.dispatch(removeexpense(one.ob.id))

str.dispatch({type:'filter_text',text:"for"})

str.dispatch({type:'SORT',sortby:'amount',order:'asc'})
