import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {firebasedisplayexp} from './deault'
import store from '../store/createstore'
import {login, logout} from './authentication'
import {Maincomponent,history} from './maincomponent'
import {firebase} from  '../../fire_base/firebase' 
import '../Styles/style.scss'
import Loadpage from './loadpage'

//const s =store()
//store.dispatch(addexpense({description:"For Rent",cost:5000}))
//console.log(store.getState())

// store.subscribe(()=>{
//     //console.log(store.getState())
//     displayitems(store.getState())

// })

// const one=store.dispatch(addexpense({description:"For Rent",cost:5000}))
// const two=store.dispatch(addexpense({description:"For Food",cost:250,createddate:"today"}))
// store.dispatch(editexpense(two.ob.id,{cost:2500,createddate:"yesterday"}))


//console.log(one)

//store.dispatch(setfiltertext('food'))

// setTimeout(()=>{
//     store.dispatch(setfiltertext('for'))
// }, 3000)



const jsx=(
    <Provider store={store}>
        <Maincomponent/>
    </Provider>
)

//ReactDOM.render(jsx,document.getElementById("app"))


ReactDOM.render(<Loadpage/>,document.getElementById("app"))

////load state from firebase before redering

let render=false
function renderApp(){
    if(!render){
        ReactDOM.render(jsx,document.getElementById("app"))
        render=true
    }
}

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log('Logged in....',user.uid)
        store.dispatch(login(user.uid))
        store.dispatch(firebasedisplayexp()).then(()=>{
            renderApp()
            if(history.location.pathname==='/')
                history.push('/Dashboard')
        })
    }
    else
      {  console.log('Logged out....')
        store.dispatch(logout())
        renderApp()
        history.push('/')}
})

