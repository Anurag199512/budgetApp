import {authprovider,firebase} from '../../fire_base/firebase'

export function startlogin(){
    return ()=>{
         return firebase.auth().signInWithPopup(authprovider)
    }
}

export function startlogout(){
    return ()=>{
         return firebase.auth().signOut()
    }
}

export const login=(uid)=>{
    //console.log('called login')
    return{
        type:'LOGIN',
        uid
    }
}


export function logout(){
    //console.log('called logout')
    return{
        type:'LOGOUT'
    }
}