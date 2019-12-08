
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

export function expensereducer(state=defaultstate.expense,action){
     
    switch(action.type){
        case 'addexp':
            //console.log(action.ob)
            //tid=action.ob.id
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
