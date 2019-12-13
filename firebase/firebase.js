import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey:FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH,
    databaseURL:FIREBASE_DB_URL,
    projectId:FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGE_SENDER_ID,
    appId: FIREBASE_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const database=firebase.database()

export {firebase,database}


  //   firebase.database().ref().set({
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




