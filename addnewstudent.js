import { initializeApp} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {getFirestore,collection,getDocs,addDoc,doc,updateDoc,getDoc} from"https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';
import {firebaseConfig} from './firebaseconfig.js';

//firebase intialize

const app = initializeApp(firebaseConfig);


// firestore intialize
const db = getFirestore();


// variables stores form data 
let stdfullname = document.getElementById("stdfullname");
let stdclassname = document.getElementById("stdclassname");
let stdid = document.getElementById("stdid");
let savetodb = document.getElementById("savetodb");



// add new data to firestore database


async function addnewstudent(){
    const documentref = collection(db,"studentinformation");
    const docref = await addDoc(documentref,{
        "studentfullname":stdfullname.value,
        "studentclassname":stdclassname.value,
        "studentid":stdid.value,
    }).then(()=>{
        alert("Student Information is Saved Successfully");
    }).catch((error)=>{
        console.log("error occur when storing student information"+error);
    });
}


savetodb.addEventListener("click",function(e){
    e.preventDefault();
    if(stdfullname.value == "" && stdclassname.value == "" && stdid.value == ""){
      alert("empty field");
    }else{
        addnewstudent();
    }
});



