

export function authReducer(state={},action){
  
    switch(action.type){
       
        case 'LOGIN': //console.log('A',action.uid,action.type)
        return {uid:action.uid};

        case 'LOGOUT': //console.log('A',action.uid,action.type)
        return {};

        default :
         //console.log('C',action.uid,action.type)
            return state;
        
    }
}
