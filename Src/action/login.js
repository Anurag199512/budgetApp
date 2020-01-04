import React from 'react'
import {connect} from 'react-redux'
import {startlogin} from './authentication' 

export function Login({startlogin}){
    return(<div className="boxlayout">
        <div className="boxlayout_box">
            <h1 className="boxlayout_title">BudgetApp</h1>
            <p style={{color:"white"}}>Keep track of your expenses !!</p>
            <button className="button"onClick={startlogin}>Login using Google</button> 
        </div>
    </div>)
}


const mapdispatchtoprops=(dispatch)=> 
{
    //console.log(dispatch)N
    return {
        startlogin:()=>dispatch(startlogin())
    }
}

//first parameter is used to map state and the other is used to map dispatch
export default connect(undefined,mapdispatchtoprops)(Login)

