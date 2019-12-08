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

export function filterreducer(state=defaultstate.filter,action){
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
