import React from 'react'
import {connect}  from 'react-redux'
import Header from './header'
import {Route,Redirect} from 'react-router-dom'



export const  privateroute=({
    isauthenticated,
    component:Component,
    ...rest})=>(
        <Route {...rest} component={(props)=>{
            return isauthenticated?(
                    <div>
                   
                        <Component {...props}/>
                        
                    </div>    
            ):(
                    <Redirect to="/" />
            )
        }}/>
    )

const mapstatetoprops=(state)=>{
    
    return{
        isauthenticated:!!state.auth.uid
    }
}

export default connect(mapstatetoprops)(privateroute)
