import React from 'react'

import {Router,Route,Switch} from 'react-router-dom'
import addexp1 from './addexpense'
import {editexp} from './editexpense'
import {help} from './help'

import {defal} from './deault'
import {dashboard} from './dashboard'
//import '../../firebase/firebase'
import Loginpage from './login'
import createhistory from  'history/createBrowserHistory'

import Privateroute from './privateroute'

//console.log('budget app')

export const history=createhistory()

 export  class Maincomponent extends React.Component{
 
    render(){
    
    return (<Router history={history}>
    <div>
        
     

        <Switch>
                <Route path="/" component={Loginpage}  exact={true}/>
                 
                <Privateroute path="/Dashboard" component={dashboard}  exact={true}/>
                <Privateroute path="/add" component={addexp1} exact={true}/>
                <Privateroute path="/edit/:id" component={editexp}  />
                <Route path="/help" component={help} exact={true}/>
                <Route component={defal} exact={true}/>
        </Switch>
  
    </div>
    </Router>
    )
    }
}

