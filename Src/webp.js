import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'


console.log('budget app')
const rout=(
    <BrowserRouter>
    <div>
        <div style={{background:"rgb(10,40,10,.3)"}}> 
        <Link to ="/">Dashboard</Link>
        <Link to ="/add">Add Expense</Link>
        <Link to ="/edit/:id">Edit expense</Link>
        <Link to ="/help">Help</Link>
        </div>
        <Switch>
                <Route path="/" component={dashboard}  exact={true}/>
                <Route path="/add" component={addexp} exact={true}/>
                <Route path="/edit/:id" component={editexp}  />
                <Route path="/help" component={help} exact={true}/>
                <Route component={defal} exact={true}/>
        </Switch>
    </div>
    </BrowserRouter>
    
)
function defal(){
    return (<div style={{color:"red"}}>URL od not exist.Go to proper URL
        </div>)
}

function addexp(){
    return (<div>Add expense here
        </div>)
}

function editexp(props){
    console.log(props)
    return (
        <div>Edit expense here
        
        </div>)
}

function help(){
    return (<div>  Help page here
        </div>)
}
function dashboard(){
    return (
        <div>DashBoard
        </div>)
}

ReactDOM.render(rout,document.getElementById("app"))

