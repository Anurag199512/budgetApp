import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import addexp1 from './addexpense'
import {editexp} from './editexpense'
import {help} from './help'
import {defal} from './deault'
import {dashboard} from './dashboard'
import '../../firebase/firebase'
import '../../firebase/prommise'
//console.log('budget app')

export class Maincomponent extends React.Component{
    render(){
    return (<BrowserRouter>
    <div>
        <div style={{background:"rgb(10,40,10,.3)",marginBottom:"10px"}}> 
        <Link to ="/">Dashboard</Link>
        <Link to ="/add">Add Expense </Link>
         
        <Link to ="/help">Help</Link>
        </div>
        <Switch>
                <Route path="/" component={dashboard}  exact={true}/>
                <Route path="/add" component={addexp1} exact={true}/>
                <Route path="/edit/:id" component={editexp}  />
                <Route path="/help" component={help} exact={true}/>
                <Route component={defal} exact={true}/>
        </Switch>
  
    </div>
    </BrowserRouter>
    )
    }
}


