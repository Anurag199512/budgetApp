console.log("redudx")

import {createStore} from 'redux'

var def_state={
    expense:[

    ],
    filter:{

    }
}

var str=createStore(
    (state={count:1},action)=>{
    console.log(action)
    switch(action.type){
        case 'addone': 
            return {
                count:state.count+1
            }
        case 'subone': 
            return {
                count:state.count-1
            }
        case 'reset': 
            return {
                count:0
            }  
        case 'set': 
            let val=typeof  action.val=== 'number'? action.val :1;
            console.log(val)
            return {
                count:val
            }  
        default:       
             return state;
    }

});

//console.log(str.getState)
str.subscribe(()=>{
    console.log(str.getState())
})

str.dispatch({type:'addone'})
str.dispatch({type:'addone'})


str.dispatch({type:'set',val:51})

str.dispatch({type:'reset'})
