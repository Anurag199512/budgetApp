import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey:process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH,
    databaseURL:process.env.FIREBASE_DB_URL,
    projectId:process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };


// var firebaseConfig = {
//   apiKey:"AIzaSyB5QXi5t-yUPKv9kOq_BSbMMH_rV48KX_M",
//   authDomain: "budgetapp-98da3.firebaseapp.com",
//   databaseURL:"https://budgetapp-98da3.firebaseio.com",
//   projectId:"budgetapp-98da3",
//   storageBucket: "budgetapp-98da3.appspot.com",
//   messagingSenderId:"911703779913",
//   appId: "1:911703779913:web:23a6927ddaf2bdb783ed98"
// };


  // Initialize Firebase
firebase.initializeApp(firebaseConfig)

const database=firebase.database()


const authprovider= new firebase.auth.GoogleAuthProvider()


export {firebase,database,authprovider}

  //   firebase.database().ref().set(
//       name:'Anuragg',
//       age:25
//   }).then(()=>{
//         console.log('data is save....')
//   }).catch((e)=>{
//     console.log('Error came:'+e)
// })


//   firebase.database().ref('attributes').set({
//       city:'bengaluru'
//   })


// //firebase.database().ref('age').remove()


// firebase.database().ref().update({
//     'attributes/city':'bangalore',
//     name:'anurag'
// })


//with this m ethod we can constantly listen for db changes

// firebase.database().ref().on('value',(ss)=>{
//     const data=ss.val()
//     console.log(data.name +' live in ' + data.attributes.city)
// })

// setTimeout(()=>{
//     firebase.database().ref('name').set('Anurag ')

// },7000)

// // firebase.database().ref().once('value')
// .then((ss)=>{
//     const data=ss.val()
//     console.log(data.name +' live in ' + data.attributes.city)
// })
// .catch((e)=>{console.log('error"',e)})




