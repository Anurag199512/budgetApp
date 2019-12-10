import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {addexpense,editexpense,removeexpense,displayitems,setfiltertext} from './deault'
import store from '../store/createstore'
//import {Provider, connect} from 'react-redux'
import {Maincomponent} from './maincomponent'


//const s =store()
//store.dispatch(addexpense({description:"For Rent",cost:5000}))
//console.log(store.getState())

store.subscribe(()=>{
    //console.log(store.getState())
    displayitems(store.getState())

})

const one=store.dispatch(addexpense({description:"For Rent",cost:5000}))
const two=store.dispatch(addexpense({description:"For Food",cost:250,createddate:"today"}))
store.dispatch(editexpense(two.ob.id,{cost:2500,createddate:"yesterday"}))


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

ReactDOM.render(jsx,document.getElementById("app"))
