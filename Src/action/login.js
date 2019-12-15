import React from 'react'
import {connect} from 'react-redux'
import {startlogin} from './authentication' 

export function Login({startlogin}){
    return(<div>
        <p>This is login page....</p>
        <button onClick={startlogin}>Login</button> 
    </div>)
}


const mapdispatchtoprops=(dispatch)=> 
{
    //console.log(dispatch)
    return {
        startlogin:()=>dispatch(startlogin())
    }
}

//first parameter is used to map state and the other is used to map dispatch
export default connect(undefined,mapdispatchtoprops)(Login)

